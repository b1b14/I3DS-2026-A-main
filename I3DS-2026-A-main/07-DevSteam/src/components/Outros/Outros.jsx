import style from "./Outros.module.css";
import CS from "../../assets/CS.jpg";

const outrosJogos = [1, 2, 3, 4];

function Outros() {
  return (
    <section className={style["outros-jogos"]}>
      <h2>OUTROS JOGOS</h2>

      {outrosJogos.map((item, index) => (
        <div className={style["jogo-horizontal"]} key={index}>
          <img src={CS} alt="CS GO" />

          <div className={style["jogo-info"]}>
            <h3>COUNTER STRIKE: GLOBAL OFFENSIVE</h3>
            <p>Ação, Estratégia, Multiplayer.</p>
            <span>R$00,00</span>
          </div>

          <button className={style.button}>ADICIONAR AO CARRINHO</button>
        </div>
      ))}
    </section>
  );
}

export default Outros;
