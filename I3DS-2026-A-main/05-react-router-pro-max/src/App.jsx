import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NaoEncontrado from "./pages/NaoEncontrado";
import Header from "./components/header/Header";
import Rodape from "./components/rodape/Rodape";

const App = () => {
  return (
    <>
      <Header />
      <div className="containerApp">
      <Routes>
        {/* Identifica todas as rotas do sistema*/}
      
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} /> {/* uma rota do sistema*/}
         <Route path="/Contato" element={<Contato />} />
           <Route path="*" element={<NaoEncontrado />} />
      </Routes>
      </div>

    <Rodape link={"https://github.com/b1b14"}>Bibia</Rodape>
    </>
  );
};

export default App;
