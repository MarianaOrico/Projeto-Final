import Footer from '../../components/Footer/Footer'
import { useState, useEffect, useRef } from 'react'
import FlatList from 'flatlist-react'
import axios from 'axios'
import { Buffer } from 'buffer';
import './biblioteca.css'

function Biblioteca() {
    const [livros, setLivros] = useState([]);
    const [show, setShow] = useState(false)
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
        setFilteredLivros(
            livros?.livros?.filter((livro) => {
                const itemMinusculo = search.toLowerCase();
                if (
                    livro.title.toLowerCase().includes(itemMinusculo) ||
                    livro.autor.toLowerCase().includes(itemMinusculo)
                ) {
                    return livro.title || livro.autor;
                }
            })
        );
    }, [livros, search])

    const handleShowHideSinopse = () => {
        if (!show) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    return (
        <>
            <div className='procurar-container'>
                <input
                    className='input-procurar'
                    placeholder='Digite um livro ou autor'
                    onChange={handleSearch}
                />

                <button className='btn-procurar'>🔍</button>
            </div>

            <div className="lib-container">
                <ul>
                    <FlatList
                        list={filteredLivros ? filteredLivros : livros.livros}
                        renderItem={(livro, index) => (
                            <div className='livro-livro'>
                                <div className="livro-card"
                                    key={livro.id} onClick={handleShowHideSinopse}>
                                    <img className='image-card' src={livro.image} />
                                    <p>{livro.title}</p>
                                </div>
                                {show ? <text>{livro.sinopse}</text> : <></>}
                            </div>
                        )}
                        displayGrid
                    />
                </ul>
            </div>
            <Footer />
        </>
    )
}





export default Biblioteca