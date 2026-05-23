'use client'

import { useState, useEffect } from 'react'

export default function GitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(false)

  const USERNAME = 'SamuelSous0'

  useEffect(() => {
    async function buscarRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
        )
        if (!res.ok) throw new Error('Erro na requisição')
        const data = await res.json()
        setRepos(data)
      } catch (err) {
        console.error(err)
        setErro(true)
      }
      setLoading(false)
    }
    buscarRepos()
  }, [])

  return (
    <div className="api-box">
      <h2>Meus repositórios no GitHub</h2>

      {loading && <p>Carregando repositórios...</p>}

      {erro && !loading && (
        <p>Não foi possível carregar os repositórios.</p>
      )}

      {!loading && !erro && repos.length === 0 && (
        <p>Nenhum repositório público encontrado.</p>
      )}

      {!loading && !erro && repos.length > 0 && (
        <div className="projects-grid" style={{ marginTop: '12px' }}>
          {repos.map((repo) => (
            <div className="project-card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description || 'Sem descrição'}</p>
              <div style={{ marginBottom: '8px' }}>
                {repo.language && <span className="tag">{repo.language}</span>}
                <span className="tag">⭐ {repo.stargazers_count}</span>
              </div>
              <div className="links">
                <a href={repo.html_url} target="_blank">Ver repositório</a>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
