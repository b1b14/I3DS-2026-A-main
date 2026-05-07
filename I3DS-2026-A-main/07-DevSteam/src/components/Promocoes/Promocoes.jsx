// ...existing code...
import style from "./Promocoes.module.css"
import LoL from "../../assets/LoL.jpg"
import Dota2 from "../../assets/Dota2.jpg"
import Valorant from "../../assets/Valorant.jpg"

const promocoes = [
  {
    nome: "League Of Legends",
    imagem: LoL,
    preco: "R$99,90",
  },
  {
    nome: "Dota 2",
    imagem: Dota2,
    preco: "R$99,90",
  },
  {
    nome: "Valorant",
    imagem: Valorant,
    preco: "R$99,90",
  },
];

export default function Promocoes() {
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

              <button>ADICIONAR AO CARRINHO</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// ...existing code...