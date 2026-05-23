'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <span className="logo">Samuel</span>
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/experiencia-academica">Exp. Acadêmica</Link>
      <Link href="/experiencia-profissional">Exp. Profissional</Link>
      <Link href="/projetos">Projetos</Link>
    </nav>
  )
}
