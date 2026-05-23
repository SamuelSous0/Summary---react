import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Samuel - Portfólio',
  description: 'Portfólio e currículo de Samuel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <footer>
          <p>© 2026 Samuel Sousa</p>
        </footer>
      </body>
    </html>
  )
}
