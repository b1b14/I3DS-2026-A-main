
import { useState } from "react";
import "./App.css"
import Link from "./components/Link/Link";
import Perfil from "./components/Perfil/Perfil";
import Rodape from "./components/Rodape/Rodape";
import SocialLink from "./components/SocialLink/SocialLink";
import Switch from "./components/Switch/Switch";
import foto from "./assets/fotoPerfil.png";


function App() {
  const[isLight,setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight)
  };

  return (
    <div id="App" className={isLight  ? "light" : ""}>
      <Perfil fotoPerfil={foto}>Bibia</Perfil> 
     
     <Switch troca ={troca} isLight={isLight}/>

     <div id="Link">
     <ul>
      <Link url={"https://www.instagram.com/eaiianabia_/"}>instagram</Link>
      <Link url={"https://open.spotify.com/intl-pt/artist/1elUiq4X7pxej6FRlrEzjM"}>Minha playlist</Link>
      <Link url={"https://www.youtube.com/watch?v=L7zQMJ_Dsek"}>youtube</Link>
      <Link url={"https://github.com/b1b14?tab=repositories"}>Github</Link>
     </ul>
     </div>
   
     <div id="SocialLinks">
      <SocialLink url={"https://github.com"} icon={"logo-github"}/>
      <SocialLink url={"https://instagram.com"} icon={"logo-instagram"}/>
      <SocialLink url={"https://youtube.com"} icon={"logo-youtube"}/>
      <SocialLink url={"https://br.linkedin.com"} icon={"logo-linkedin"}/>
     </div>
    <Rodape>Bibia</Rodape>
    </div>
  )
}

export default App
