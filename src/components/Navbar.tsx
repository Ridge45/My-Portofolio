import { useState, useEffect } from 'react'
import { DownloadIcon } from './Icons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(15,20,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #29323D' : 'none',
        padding: scrolled ? '16px 0' : '24px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="font-display font-bold text-2xl tracking-tighter">
          <span style={{ color: '#E9EEF3' }}>RIDGE</span>
          <span style={{ color: '#4FD8A0' }}>.</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { href: '#hero', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#work', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#experience', label: 'Experience' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors duration-200"
                style={{ color: '#8B96A3' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E9EEF3')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8B96A3')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="/Ridge_Maged_CVmain.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
            style={{ border: '1px solid #29323D', color: '#8B96A3' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#4FD8A0'
              e.currentTarget.style.color = '#4FD8A0'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#29323D'
              e.currentTarget.style.color = '#8B96A3'
            }}
          >
            <DownloadIcon size={16} /> Download CV
          </a>
        </div>

      </div>
    </nav>
  )
}
