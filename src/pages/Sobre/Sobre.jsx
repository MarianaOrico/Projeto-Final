import Footer from '../../components/Footer/Footer'
import './sobre.css'
import Imagem from './../../images/Imagem.jpeg'

function Sobre() {
    return (
        <>
            <div className='present'>
                <img id="imgPerfil" className="scale-up-center" src={Imagem} />
                <div className='p-present'>
                    <h1>Mariana Orico</h1>
                    <div className='icons-skills'>
                    <i class="fa-solid fa-code"></i><i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3"></i>
                    <i class="fa-brands fa-square-js"></i>
                    <i class="fa-brands fa-react"></i>
                    </div>
                    <p className='slide-left'>Desenvolvedora Front-End Júnior</p>
                    <p className='slide-right'>Graduanda em Psicologia pela Universidade Federal de Sergipe</p>
                    <p className='slide-right'>Gestora de Condomínios na empresa Torre Administração de Condomínios</p>
                    <p className='slide-left'>Estagiária em Psicologia Institucional no Centro de Atenção Psicossocial III Liberdade</p>
                    <p className='slide-right'>Estagiária em Psicologia Clinica da EMAESM do Centro de Reabilitação Dr. Raimundo Aragão</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sobre