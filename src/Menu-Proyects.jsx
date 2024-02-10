import './Estilo.css'

function MenuProyects({PageName,TextName,imgUrl}){
    return(
<article className="Proyects-Card">
    <header>
        <img className='Proyects-Card-img' src={imgUrl} alt="" />
     </header>
     <div>
        <h4 className='Proyects-Card-Text'> {PageName}</h4>
        <p className='Proyects-Card-Parrf'> {TextName} </p>
     </div>

<aside>
    <button className='Code-Button'> Codigo </button>
    <button className='Visite-Buttom'> Visitar </button>
</aside>

</article>
    );
}


export default MenuProyects;