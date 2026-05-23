import Link from 'next/link'
import WeatherWidget from './components/WeatherWidget'

export default function Home() {
  return (
    <div className="container">

      <div className="hero">
        <div className="nome">Samuel Sousa</div>
        <div className="titulo">Analista de dados jr | Estudante de SI</div>
        <div className="contatos">
          <a href="https://github.com/SamuelSous0" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/samuel-sousa-9613982aa/" target="_blank">LinkedIn</a>
          <span>Recife, PE</span>
        </div>
      </div>

      <h2>Habilidades</h2>
      <div className="skills-grid">
        {[
          'Python',
          'Sql',
          'Power Bi',
          'Grafana'
        ].map((s) => (
          <div className="skill-item" key={s}>{s}</div>
        ))}
      </div>

      <WeatherWidget />

      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <Link href="/projetos">
          <button>Ver meus projetos →</button>
        </Link>
      </div>

    </div>
  )
}
