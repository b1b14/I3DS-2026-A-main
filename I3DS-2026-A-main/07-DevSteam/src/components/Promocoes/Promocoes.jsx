import style from "./Promocoes.module.css";
import LoL from "../../assets/LoL.jpg";
import Dota2 from "../../assets/Dota2.jpg";
import Valorant from "../../assets/Valorant.jpg";

const promocoes = [
  {
    nome: "League Of Legends",
    imagem: LoL,
    preco: "R$99,90",
    descricao:
      "League of Legends (LoL) é um jogo online de estratégia em equipes, onde dois times de cinco jogadores tentam destruir a base inimiga. Cada jogador escolhe um campeão com habilidades únicas e trabalha em equipe para vencer a partida.",
  },
  {
    nome: "Dota 2",
    imagem: Dota2,
    preco: "R$99,90",
    descricao: "Dota 2 é um jogo online de estratégia do gênero MOBA, onde duas equipes de cinco jogadores batalham para destruir a base adversária. Cada jogador controla um herói com habilidades únicas e precisa trabalhar em equipe, criar estratégias e evoluir durante a partida para vencer.",
  },
  {
    nome: "Valorant",
    imagem: Valorant,
    preco: "R$99,90",
    descricao: "Valorant é um jogo online de tiro tático em primeira pessoa, desenvolvido pela Riot Games. Duas equipes competem em partidas estratégicas, onde cada jogador escolhe um agente com habilidades especiais. O objetivo varia entre plantar ou desarmar a Spike e eliminar o time adversário.",
  },
];

function Promocoes({ onCarrinhoClick }) {
  return (
    <section className={style.promocoes}>
      <h2>PROMOÇÕES</h2>

      <div className={style["cards-promocao"]}>
        {promocoes.map((jogo, index) => (
          <div className={style.card} key={index}>
            <img src={jogo.imagem} alt={jogo.nome} />

            <div className={style["info-card"]}>
              <span className={style.tag}>OFERTA EXCLUSIVA</span>

              <div className={style.desconto}>-50%</div>

              <div className={style.preco}>{jogo.preco}</div>

              <p style={{ margin: "8px 0 12px", color: "#cfd8e3" }}>
                {jogo.descricao}
              </p>

              <button onClick={() => onCarrinhoClick(jogo)}>
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Promocoes;
