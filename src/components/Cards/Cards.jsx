import './cards.css'

function Cards(props) {
    return (
        <div className='container-cards'>
            <div id='card-vertente' className='shadow-pop-bl'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link}>Referência</a>
            </div>
        </div>
    )
}

export default Cards