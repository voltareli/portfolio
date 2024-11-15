import './projeto.scss'

export default function Card({ imagem, titulo, descricao, data }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imagem} alt={titulo} />
            </div>
            <div className="card-info">
                <h3>{titulo}</h3>
            </div>
            <div className="card-hover">
                <p>{descricao}</p>
                <span>{data}</span>
            </div>
        </div>
    );
}