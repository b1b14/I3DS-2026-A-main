import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState({});
  const [translatedPlot, setTranslatedPlot] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const translateToPtBr = async (text) => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt-BR`
      );
      const data = await response.json();

      return data?.responseData?.translatedText || text;
    } catch (error) {
      console.error("Erro ao traduzir sinopse:", error);
      return text;
    }
  };

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const response = await fetch(`${props.apiUrl}&i=${props.movieID}`);
        const data = await response.json();

        setMovieDesc(data);

        if (data?.Plot && data.Plot !== "N/A") {
          setIsTranslating(true);
          const translated = await translateToPtBr(data.Plot);
          setTranslatedPlot(translated);
          setIsTranslating(false);
          return;
        }

        setTranslatedPlot("Sinopse indisponível.");
      } catch (error) {
        console.error(error);
        setTranslatedPlot("Não foi possível carregar a sinopse.");
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

          <div className={styles.movieType}>
            <div>
              <img src="/favicon.png" alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
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
            <p>Elenco: {movieDesc.Actors}</p>
            <p>Gênero: {movieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Sinopse: {isTranslating ? "Traduzindo..." : translatedPlot || movieDesc.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;