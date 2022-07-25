import './menu.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
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
    )
}

export default Menu