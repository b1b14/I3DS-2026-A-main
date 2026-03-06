import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState({});
  const [translatedData, setTranslatedData] = useState({});
  const [isPtBr, setIsPtBr] = useState(false);
  const [isLoadingTranslation, setIsLoadingTranslation] = useState(false);

  const translateToPtBr = async (text) => {
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(text)}`,
      );
      const data = await response.json();

      if (Array.isArray(data?.[0])) {
        return data[0].map((item) => item?.[0]).join("");
      }

      return text;
    } catch (error) {
      console.error("Erro ao traduzir sinopse:", error);
      return text;
    }
  };

  const translateAllFields = async () => {
    if (isPtBr) {
      setIsPtBr(false);
      return;
    }

    setIsLoadingTranslation(true);

    try {
      const fieldsToTranslate = {
        Title: movieDesc.Title,
        Genre: movieDesc.Genre,
        Plot: movieDesc.Plot,
        Actors: movieDesc.Actors,
      };

      const translated = {};

      for (const [key, value] of Object.entries(fieldsToTranslate)) {
        if (value && value !== "N/A") {
          translated[key] = await translateToPtBr(value);
        } else {
          translated[key] = value;
        }
      }

      setTranslatedData(translated);
      setIsPtBr(true);
    } catch (error) {
      console.error("Erro ao traduzir campos:", error);
    } finally {
      setIsLoadingTranslation(false);
    }
  };

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const response = await fetch(`${props.apiUrl}&i=${props.movieID}`);
        const data = await response.json();
        setMovieDesc(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadMovie();
  }, [props.apiUrl, props.movieID]);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />

          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>

          <button
            className={styles.btnTranslate}
            onClick={translateAllFields}
            disabled={isLoadingTranslation}
            title={isPtBr ? "Mostrar original (EN)" : "Traduzir para PT-BR"}
          >
            {isLoadingTranslation ? "⏳" : isPtBr ? "EN" : "PT-BR"}
          </button>

          <div className={styles.movieType}>
            <div>
              <img src="/favicon.png" alt="" />
              {movieDesc.Type}
              <h1>
                {isPtBr && translatedData.Title
                  ? translatedData.Title
                  : movieDesc.Title}
              </h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`}
                target="_blank"
                rel="noreferrer"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>
          <div className={styles.containerFlex}>
            <p>
              Elenco:{" "}
              {isPtBr && translatedData.Actors
                ? translatedData.Actors
                : movieDesc.Actors}
            </p>
            <p>
              Gênero:{" "}
              {isPtBr && translatedData.Genre
                ? translatedData.Genre
                : movieDesc.Genre}
            </p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Sinopse:{" "}
            {isPtBr && translatedData.Plot
              ? translatedData.Plot
              : movieDesc.Plot || "Sinopse indisponível"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
