import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(15,15,15,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#f0f0f0', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>
            Dachepally Akhila<span style={{ color: '#6366f1' }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:akhiladhachepally@gmail.com"
            style={{
              background: '#6366f1',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '8px 18px',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Hire me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            color: '#f0f0f0',
            cursor: 'pointer',
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: '#161616',
          borderTop: '1px solid #2a2a2a',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: '#f0f0f0', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:akhiladhachepally@gmail.com"
            style={{
              background: '#6366f1',
              color: '#fff',
              borderRadius: 8,
              padding: '10px 18px',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Hire me
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none;  }
        @media (max-width: 850px) {
          .hidden-mobile { display: none;  }
          .show-mobile   { display: block; }
        }
      `}</style>
    </header>
  )
}
