import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuProyects from './Menu-Proyects'
import './index.css'

const Img1 = "/img/Ramirez & Asociados.jpg"
const Img2 = "/img/Fundacion Reyes Jimenes.jpg"
const Img3 = "/img/Encriptador.jpg"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <section className='Card-Proyects'>
    <MenuProyects PageName={"Ramirez & Asociados"} TextName={"Pagina Web para Ramirez & Asociados donde contiene informacion sobre la empresa "} imgUrl={Img1}/>

    <MenuProyects  imgUrl={Img2} PageName={"Fundacion Reyes Jimenez"} TextName={"Pagina web desarrolalda para la fundacion Reyes Jimenez"}/>
    
    <MenuProyects imgUrl={Img3} PageName={"Encriptador"} TextName={"Encriptador de Texto,Reto De Alura Latam"}/>

    </section>
    
  </React.StrictMode>,
)
