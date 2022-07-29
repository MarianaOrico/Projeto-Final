import './menu.css'
import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img className='logo' src='./../../../music-album.png' />
                <h3 className='text-logo'>Corpo no Mundo</h3>
            </div>

            <ul className='menu'>

                <li className='item'>
                    <Link className='link' to="/biblioteca">Biblioteca</Link>
                </li>

                <li className='item'>
                    <Link className='link' to="/vertentes">Vertentes</Link>
                </li>

                <li className='item'>
                    <Link className='link' to="/">Sobre</Link>
                </li>

            </ul>
        </header>
    )
}

export default Menu