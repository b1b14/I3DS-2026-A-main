import "./App.css"
import Header from "./components/Header/Header";
import Promocoes from "./components/Promocoes/Promocoes";
import Outros from "./components/Outros/Outros";

function App(){
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Promocoes />
        <Outros />
      </div> 

    </div>
  )
}

export default App