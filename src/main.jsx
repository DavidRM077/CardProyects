import React from "react";
import ReactDOM from "react-dom/client";
import MenuProyects from "./Menu-Proyects";
import "./index.css";

const Img1 = "/img/Ramirez & Asociados.jpg";
const Img2 = "/img/Fundacion Reyes Jimenes.jpg";
const Img3 = "/img/Encriptador.jpg";

const sitios = [
  {
    PageName: "Ramirez & Asociados",
    TextName: "Pagina Web para Ramirez & Asociados donde contiene informacion sobre la empresa",
    imgUrl: Img1,
    InicialLike: true
    
  },
  {
    PageName: "Fundacion Reyes Jimenes",
    TextName: "Pagina Web realizada para la fundación Reyes Jiménez",
    imgUrl: Img2,
    InicialLike: false
  },
  {
    PageName: "Encriptador de Texto",
    TextName: "Sistema que encripta textos y también puede descifrar textos y copiarlos",
    imgUrl: Img3,
    LinkCode: 'https://github.com/DavidRM077/Encriptador-de-texto',
    InicialLike: true
  },
];


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <br />
    <section className="Card-Proyects">
      {sitios.map(({ PageName, TextName, imgUrl,LinkCode,InicialLike }) => (
        <MenuProyects key={PageName} PageName={PageName} TextName={TextName} imgUrl={imgUrl} LinkCode={LinkCode} InicialLike={InicialLike} />
      ))}
    </section>
  </React.StrictMode>
);
