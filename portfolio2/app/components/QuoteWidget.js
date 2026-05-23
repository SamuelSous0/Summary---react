'use client'

import { useState, useEffect } from 'react'

export default function QuoteWidget() {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)

  async function buscarCitacao() {
    setLoading(true)
    try {
      const res = await fetch('https://dummyjson.com/quotes/random')
      const data = await res.json()
      setQuote(data)
    } catch (err) {
      console.error('Erro ao buscar citação:', err)
    }
    setLoading(false)
  }

  useEffect(() => {
    buscarCitacao()
  }, [])

  return (
    <div className="api-box">
      <h2>Citação aleatória</h2>

      {loading && <p>Carregando...</p>}

      {!loading && quote && (
        <>
          <p className="quote-text">"{quote.quote}"</p>
          <p className="quote-author">— {quote.author}</p>
          <button onClick={buscarCitacao}>Nova citação</button>
        </>
      )}

      <p className="fonte-api">Fonte: dummyjson.com/quotes</p>
    </div>
  )
}
