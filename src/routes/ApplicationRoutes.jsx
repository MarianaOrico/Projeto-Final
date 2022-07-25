import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Biblioteca from '../pages/Biblioteca/Biblioteca'
import Vertentes from '../pages/Vertentes/Vertentes'
import Menu from '../components/Menu/Menu'


function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="biblioteca" element={<Biblioteca />} />
                <Route path="vertentes" element={<Vertentes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ApplicationRoutes