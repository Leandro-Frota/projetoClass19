import './imagesStyle.css'

export function CardImage(){


    const indiceImg = Math.round(Math.random()*10)

return (
    <div className='divImagens'>
 
        <img className='imageLinks' src={`https://source.unsplash.com/random/800x600?sig=${indiceImg}`} alt="imagem aleatória"></img>
        <div className='actionImage'>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
        </div>

    </div>
)
}