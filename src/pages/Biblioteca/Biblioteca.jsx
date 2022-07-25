import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import FlatList from 'flatlist-react'
import axios from 'axios'

function Biblioteca() {
    const [livros, setLivros] = useState([])
    const baseURL = 'https://github.com/MarianaOrico/API-fake-projeto-final/blob/main/db.json'

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setLivros(response.data))
    }, [])

    console.log(livros)

    return (
        <>
            <div className="lib-container">
                <ul>
                    <FlatList
                        list={livros}
                        renderItem={(livro) =>
                            <div className="livro" key={livro.id}>
                                <h1>{livro.autor}</h1>
                                <img src={livro.image} />
                                <h3>{livro.title}</h3>
                                <p>{livro.sinopse}</p>
                            </div>
                        }
                        displayGrid
                    />
                </ul>

            </div>
        

            <Footer />
        </>

    )
}

export default Biblioteca