function Livros(props) {

    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image} />
            <p>{props.description}</p>
        </div>

    )
}

export default Livros