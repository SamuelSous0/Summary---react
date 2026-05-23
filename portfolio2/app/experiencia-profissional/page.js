export const metadata = {
  title: 'Experiência Profissional - Samuel',
}

export default function ExperienciaProfissional() {
  return (
    <div className="container">
      <h1>Experiência Profissional</h1>

      <h2>Experiências</h2>

      <div className="card">
        <p className="periodo">2025.2 — Presente</p>
        <h3>Analista de dados jr</h3>
        <p className="instituicao">Tascom — Recife, PE</p>
        <p>
          Atuo como Analista de Dados na área da saúde, com foco em SQL e Python, realizando extração, organização e análise de dados clínicos e administrativos para apoiar a tomada de decisão, indicadores de desempenho e melhoria de processos assistenciais. Trabalhei com dados provenientes de sistemas hospitalares, garantindo qualidade, consistência e clareza das informações.
        </p>
        <ul style={{ marginTop: '8px' }}>
          <li>Análise e tratamento de dados com SQL e Python</li>
          <li>Criação e acompanhamento de indicadores e dashboards com Power BI e Grafana</li>
          </ul>
        <div style={{ marginTop: '12px' }}>
          <span className="tag">Python</span>
          <span className="tag">SQL</span>
        </div>
      </div>

      <div className="card">
        <p className="periodo">2025.1</p>
        <h3>Auxiliar de gestor de projetos</h3>
        <p className="instituicao">Real Hospital Português — Recife, PE</p>
        <p>
          Atuei como auxiliar de gestor de projetos, prestando apoio nas implantações de iniciativas ligadas à demanda de transformação digital, colaborando no acompanhamento das atividades, organização de processos e suporte às equipes envolvidas.
        </p>
      </div>

      <div className="card">
        <p className="periodo">2020 — 2024</p>
        <h3>Suporte de Hardware</h3>
        <p className="instituicao">Autônomo — Recife, PE</p>
        <p>
          Atuei como suporte de hardware, prestando assistência na manutenção e configuração de computadores e periféricos, colaborando na identificação e solução de problemas técnicos, suporte aos usuários e garantia do bom funcionamento dos equipamentos e sistemas.
        </p>
        <div style={{ marginTop: '12px' }}>
          <span className="tag">Hardware</span>
        </div>
      </div>


      <h2>Idiomas</h2>

      <div className="card">
        <ul>
          <li><strong>Inglês:</strong> Intermediário</li>
        </ul>
      </div>
    </div>
  )
}
