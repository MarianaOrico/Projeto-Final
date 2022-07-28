import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Cards'

function Vertentes() {
    return (
        <>
            <h2>Vertentes da Psicologia</h2>
            <p>Quando começamos a fazer psicoterapia individual, muitas vezes nos deparamos com a pergunta "Qual a vertente do(a) seu/sua psicólogo(a)?"" e não sabemos responder. Nem tão pouco se deveríamos procurar sobre o assunto antes de escolher um profissional da área. Uma abordagem da Psicologia ou vertente significa o referencial teórico e metodológico utilizado por aquele profissional de saúde mental. Abaixo trarei algumas abordagens existentes com o intuito de que você possa se familiarizar com assunto e entender que você pode sim se dar bem e até melhor com algumas abordagens do que com outras.</p>
            <Cards title="TCC" />
            <Cards title="Fenomenologia" />
            <Cards title="Gestalt-Terapia" />
            <Cards title="Psicanálise" />
            <Cards title="Psicodrama" />
            <Footer />
        </>
    )
}
    
export default Vertentes