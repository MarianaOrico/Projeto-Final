import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Cards'
import './vertentes.css'

function Vertentes() {
    return (
        <>
            <div className='textinhos'>
            <h1>Vertentes da Psicologia</h1>
            <p>Quando começamos a fazer psicoterapia individual, muitas vezes nos deparamos com a pergunta "Qual a vertente do(a) seu/sua psicólogo(a)?"" e não sabemos responder. Nem tão pouco sabemos a importância de procurar sobre o assunto antes de escolher um profissional da área. Uma abordagem da Psicologia ou vertente se trata do referencial teórico e metodológico utilizado por aquele profissional de saúde mental.</p>
            <p>Vamos tentar enxergar por uma outra perspectiva: fazer terapia é como quando um médico te sugere fazer algum exercício físico para cuidar da sua saúde física -no nosso caso, fazer terapia seria para cuidarmos da nossa saúde mental. E então escolhemos entre alguns esportes, o nosso preferido, seja vôlei, futebol, natação etc e temos mais motivação para continuar o cuidado da nossa saúde física quando fazemos algo que nós gostamos. Assim funciona com a terapia. Os diferentes esportes são as diferentes abordagens da psicologia, apesar de ajudar a nossa saúde, encontrar aquela que a gente mais se identifique faz com que a motivação para engajar nas sessões e continuarmos a cuidar da nossa saúde mental seja mais efetivo.</p>
            <p>Abaixo trarei algumas abordagens existentes com o intuito de que você possa se familiarizar com assunto e entender que você pode sim se dar bem e até melhor com algumas abordagens do que com outras.</p>
            </div>
            
            <div className='cards-container'>
            <Cards title="Fenomenologia" link="https://www.ex-isto.com/2018/07/existencialismo-humanismo-diferencas.html#:~:text=Enquanto%20o%20humanismo%20toma%20o,tomando%20o%20ser%20humano%20como" />
            <Cards title="Gestalt-Terapia" link="https://www.vittude.com/blog/quais-principais-abordagens-da-psicologia/" />
            <Cards title="Psicodrama" />
            <Cards title="Terapia Cognitivo-Comportamental (TCC)" />
            <Cards title="Psicanálise" />
            <Cards title="Psicologia Analítica Jungiana" />
            <Cards title="Análise bioenergética"/>
            </div>

            <p className='textinhos'>*Vale ressaltar que: terapia não é para todo mundo. Existem várias formas de processos terapêuticos e a psicoterapia é uma delas, nem todo mundo vai se dar com esse formato e tudo bem. Cada pessoa é única e precisa experimentar até identificar o que funciona melhor para si mesmo!</p>

            <Footer />
        </>
    )
}
    
export default Vertentes