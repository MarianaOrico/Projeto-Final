import './cards.css'

function Cards(props) {
    return (
        <div className='container-cards'>
            <div className="card-vertente">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Cards