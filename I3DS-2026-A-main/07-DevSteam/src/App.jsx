import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Promocoes from "./components/Promocoes/Promocoes";
import Outros from "./components/Outros/Outros";
import Carrinho from "./components/Carrinho/Carrinho";
import Login from "./Pages/Login/Login";

function App() {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const toggleCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  const abrirLogin = () => {
    setMostrarLogin(true);
  };

  const voltarParaHome = () => {
    setMostrarLogin(false);
    setCarrinhoAberto(false);
  };

  const concluirLogin = () => {
    setLoggedIn(true);
    setMostrarLogin(false);
  };

  const adicionarAoCarrinho = (jogo) => {
    if (!loggedIn) {
      setMostrarLogin(true);
      return;
    }

    setItensCarrinho((itensAtuais) => [...itensAtuais, jogo]);
    setCarrinhoAberto(true);
  };

  return (
    <div className="app">
      <Header
        onCartClick={toggleCarrinho}
        onLoginClick={abrirLogin}
        onHomeClick={voltarParaHome}
      />
      <Carrinho
        isAberto={carrinhoAberto}
        onClose={toggleCarrinho}
        itens={itensCarrinho}
      />

      {mostrarLogin ? (
        <Login onLoginSuccess={concluirLogin} />
      ) : (
        <div className="container">
          <Promocoes onCarrinhoClick={adicionarAoCarrinho} />
          <Outros onCarrinhoClick={adicionarAoCarrinho} />
        </div>
      )}
    </div>
  );
}

export default App;
