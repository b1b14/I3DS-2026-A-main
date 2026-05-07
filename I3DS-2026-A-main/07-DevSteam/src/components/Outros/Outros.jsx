import style from "./Outros.module.css"

const outrosJogos = [1, 2, 3, 4];

function Outros() {
  return (
    <section className={style["outros-jogos"]}>
      <h2>OUTROS JOGOS</h2>

      {outrosJogos.map((item, index) => (
        <div className={style["jogo-horizontal"]} key={index}>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop"
            alt="CS GO"
          />

          <div className={style["jogo-info"]}>
            <h3>COUNTER STRIKE: GLOBAL OFFENSIVE</h3>
            <p>Ação, Estratégia, Multiplayer.</p>
            <span>R$99,90</span>
          </div>

          <button className={style.button}>ADICIONAR AO CARRINHO</button>
        </div>
      ))}
    </section>
  );
}

export default Outros