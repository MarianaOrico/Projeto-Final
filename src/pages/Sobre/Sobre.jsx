import Footer from '../../components/Footer/Footer'
import './sobre.css'

function Sobre() {
    return (
        <>
            <div className='present'>
                <img id="imgPerfil" className="scale-up-center" src="../../../Imagem.jpeg" />
                <div className='p-present'>
                    <h1>Mariana Orico</h1>
                    <p className='slide-right'>Graduanda em Psicologia pela Universidade Federal de Sergipe</p>
                    <p className='slide-left'>Desenvolvedora Front-End Júnior | HTML | CSS | JavaScript | React.JS</p>
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