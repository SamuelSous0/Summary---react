export const metadata = {
  title: 'Experiência Acadêmica - Samuel',
}

export default function ExperienciaAcademica() {
  return (
    <div className="container">
      <h1>Experiência Acadêmica</h1>

      <h2>Formação</h2>

      <div className="card">
        <p className="periodo">2025 — Presente</p>
        <h3>Sistema para internet</h3>
        <p className="instituicao">Universidade Católica de Pernambuco (UNICAP) — Recife, PE</p>
        
        <div>
          <span className="tag">Em andamento</span>
          <span className="tag">Tecnólogo</span>
        </div>
      </div>

      <div className="card">
        <p className="periodo">2020 — 2022</p>
        <h3>Técnico</h3>
        <p className="instituicao">Senac — Recife, PE</p>
        <p>Curso introdutorio Hardware, Redes e lógica de programação</p>
        <div>
          <span className="tag">Concluído</span>
        </div>
      </div>
    </div>
  )
}
