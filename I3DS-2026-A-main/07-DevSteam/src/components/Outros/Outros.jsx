import style from "./Outros.module.css";
import CS from "../../assets/CS.jpg";
import HK from "../../assets/HK.jpg";
import SV from "../../assets/SV.jpg";
import Cup from "../../assets/Cup.jpg";
const outrosJogos = [ {
    nome: "COUNTER STRIKE: GLOBAL OFFENSIVE",
    imagem:CS ,
    preco: "R$00,00",
    descricao:  "Tático,FPS"
  },
  {
    nome: "Hollow Knight",
    imagem:HK ,
    preco: "R$79,90",
    descricao:  "Metroidvania,Ação, Aventura, Plataforma 2D",
  },
  {
    nome: "Stardew Valley",
    imagem:SV ,
    preco: "R$69,99",
    descricao:  "Simulação,Farming Simulator,RPG,Sandbox/vida cotidiana",
  },
  {
    nome: "Cuphead",
    imagem: Cup,
    preco: "R$99,90",
    descricao:  "Plataforma,Ação",
  },
];




-function Outros({ onCarrinhoClick }) {
  return (
    <section className={style["outros-jogos"]}>
      <h2>OUTROS JOGOS</h2>

      {outrosJogos.map((item, index) => (
        <div className={style["jogo-horizontal"]} key={index}>
          <img src={item.imagem} alt={item.nome} />

          <div className={style["jogo-info"]}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <span>{item.preco}</span>
          </div>

          <button
            type="button"
            className={style["btn-carrinho"]}
            onClick={() => onCarrinhoClick(item)}
          >
            ADICIONAR AO CARRINHO
          </button>
        </div>
      ))}
    </section>
  );
}

export default Outros;
