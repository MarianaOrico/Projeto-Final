import './menu.css'
import { Link } from 'react-router-dom'
import './menu.css'
import Imagem from './../../images/music-album.png'

function Menu() {

    return (
        <header className='header'>
            <div className='logo-container'>
                <img className='logo' src={Imagem} />
                <h3 className='text-logo'>Ser Livro</h3>
            </div>

            <ul className='menu'>

                <li className='item'>
                    <Link id='link' to="/biblioteca">Biblioteca</Link>
                </li>

                <li className='item'>
                    <Link id='link' to="/vertentes">Vertentes</Link>
                </li>

                <li className='item'>
                    <Link id='link' to="/">Sobre</Link>
                </li>

            </ul>
        </header>
    )
}

export default Menu