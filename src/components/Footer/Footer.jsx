import './footer.css'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer-div'>
                <h1>Projeto Final da Turma On17 - Front-End da Reprograma</h1>
                </div>
                <div className='social-media'>
                    <a href='https://github.com/MarianaOrico'><img className='first' src='./../../../github-icon.png' /></a>
                    <a href='https://www.linkedin.com/in/marianaorico/'><img className='second' src='./../../../linkedIn-icon-removebg-preview.png' /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer