'use client'

import { useState, useEffect } from 'react'

export default function WeatherWidget() {
  const [clima, setClima] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function buscarClima() {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-8.0476&longitude=-34.8770&current=temperature_2m,weathercode&timezone=America/Recife'
        )
        const data = await res.json()
        setClima({
          temp: Math.round(data.current.temperature_2m),
          codigo: data.current.weathercode,
        })
      } catch (err) {
        console.error('Erro ao buscar clima:', err)
      }
      setLoading(false)
    }
    buscarClima()
  }, [])

  function getDescricao(codigo) {
    if (codigo === 0) return '☀️ Céu limpo'
    if (codigo <= 3) return '⛅ Parcialmente nublado'
    if (codigo <= 48) return '🌫️ Neblina'
    if (codigo <= 67) return '🌧️ Chuva'
    if (codigo <= 77) return '🌨️ Neve'
    if (codigo <= 82) return '🌦️ Pancadas de chuva'
    return '⛈️ Tempestade'
  }

  return (
    <div className="api-box">
      <h2>🌡️ Clima em Recife agora</h2>

      {loading && <p>Carregando...</p>}

      {!loading && clima && (
        <div className="weather-info">
          <span className="weather-temp">{clima.temp}°C</span>
          <span className="weather-desc">{getDescricao(clima.codigo)}</span>
        </div>
      )}

      <p className="fonte-api">Fonte: open-meteo.com</p>
    </div>
  )
}
