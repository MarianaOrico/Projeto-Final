import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import FlatList from 'flatlist-react'
import axios from 'axios'
import { Buffer } from 'buffer';
import './biblioteca.css'

function Biblioteca() {
    const [livros, setLivros] = useState([])
    const baseURL = 'https://api.github.com/repos/MarianaOrico/API-fake-projeto-final/contents/db.json?ref=main';
    const [filteredLivros, setFilteredLivros] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            const buff = Buffer.from(response.data.content, "base64");
            const books = JSON.parse(buff);
            setLivros(books);
        });
    }, []);

    console.log(livros);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setFilteredLivros(livros.livros.filter(livro => livro.title.includes(search)))
    }, [livros, search])


    return (
        <>
            <div className='procurar-container'>
                <input className='input-procurar'
                    placeholder='Digite um livro ou autor'
                    onChange={handleSearch}
                />

                <button className='btn-procurar'>🔍</button>
            </div>

            {
                filteredLivros.map(livros => {
                    <div className="lib-container">
                        <ul>
                            <FlatList
                                list={filteredLivros ? filteredLivros.livros : livros.livros}
                                renderItem={(livro) =>
                                    <div className="livro-card" key={livro.id}>
                                        <img src={livro.image} />
                                        <h3>{livro.title}</h3>
                                    </div>
                                }
                                displayGrid
                            />
                        </ul>

                    </div>
                })}

            <Footer />
        </>
    )
}





export default Biblioteca