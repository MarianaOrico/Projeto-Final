import './cards.css'

function Cards(props) {
    return(
        <div className="card-vertente">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>
    )
}

export default Cards