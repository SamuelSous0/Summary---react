import QuoteWidget from '../components/QuoteWidget'

export const metadata = {
  title: 'Sobre - Samuel',
}

export default function Sobre() {

  return (
    <div className="container">
      <h1>Sobre mim</h1>

      <div className="card">
        <p>
          Estudante de tecnologia e Analista de Dados Júnior, com experiência em análise e tratamento de dados, Business Intelligence, Python e SQL, além de participação em projetos de transformação digital e residências tecnológicas, principalmente soluções voltadas à área da saúde.
        </p>
        <p>
          Comecei a programar por curiosidade e hoje já consigo construir aplicações
          completas usando React e Node.js. Meu objetivo é conseguir um estágio onde
          eu possa aprender na prática e contribuir com projetos reais.
        </p>
        <p>
          Fora do computador, gosto de jogar xadrez, ouvir música e assistir documentários
          sobre tecnologia.
        </p>
      </div>
      <QuoteWidget />
    </div>
  )
}
