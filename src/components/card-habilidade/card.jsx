import './card.scss'

export default function card({imagem, nome}){
    return(

        <div className='card-principal'>

            <div className='nome'>
                <p>{nome}</p>
            </div>

            <div className='logo'>
                <img src={imagem} alt="" />
            </div>

            <div className='linha'></div>

        </div>
    )
};