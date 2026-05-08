import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Promocoes from "./components/Promocoes/Promocoes";
import Outros from "./components/Outros/Outros";
import Login from "./Pages/Login/Login";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <div className="app">
      <Header onLoginClick={() => setPagina("login")} />

      {pagina === "home" ? (
        <div className="container">
          <Promocoes />
          <Outros />
        </div>
      ) : (
        <Login onVoltar={() => setPagina("home")} />
      )}
    </div>
  );
}

export default App;
