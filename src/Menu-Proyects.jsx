import './Estilo.css'
import { Route,Link} from 'react-router-dom';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function MenuProyects({PageName,TextName,imgUrl,InicialLike}){

const [Likee,setLikee] = useState(InicialLike)
const ButtonClaseName = Likee ? "Like" : "DisLike"
    
const Like = () => 
{
    setLikee(!Likee)
}

    return(
<article className="Proyects-Card">
    <div className='Contenedor-Like'>
        <span className={ButtonClaseName} onClick={Like}>   </span>
    </div>
    <header>
        <img className='Proyects-Card-img' src={imgUrl} alt="" />
     </header>
     <div>
        <h4 className='Proyects-Card-Text'> {PageName}</h4>
        <p className='Proyects-Card-Parrf'> {TextName} </p>
     </div>

<aside>
    
    <button  className='Code-Button' >  Codigo </button>
    <button className='Visite-Buttom'> Visitar </button>
</aside>

</article>
    );
}


export default MenuProyects;