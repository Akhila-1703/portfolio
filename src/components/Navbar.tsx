import { useState, useEffect } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div style={{ height: 90 }} />
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <div style={{
          width: '100%',
          padding: '0 24px',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo - Left */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flex: 1 }}>
            <span style={{ color: '#f0f0f0', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>
              Dachepally Akhila
            </span>
          </a>

          {/* Center Pill Nav - Desktop */}
          <nav 
            className="hidden-mobile"
            style={{ 
              display: 'flex', 
              gap: 8, 
              alignItems: 'center',
              background: '#1a1a1a',
              padding: '6px',
              borderRadius: 999,
              border: '1px solid #2a2a2a'
            }}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: 999,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = '#2a2a2a';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#aaa';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Side - Available & Socials */}
          <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 24, flex: 1 }}>
            {/* Status Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 500 }}>Available</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <a href="https://github.com/Akhila-1703" target="_blank" rel="noreferrer" className="social-icon">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dachepally-akhila-1685a2336/" target="_blank" rel="noreferrer" className="social-icon">
                <LinkedinIcon size={20} />
              </a>
              <a href="#contact" className="social-icon">
                <Mail size={20} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="social-icon" style={{ fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                CV
              </a>
            </div>
          </div>

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
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{
            background: 'rgba(20,20,20,0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ color: '#22c55e', fontSize: 14, fontWeight: 500 }}>Available for work</span>
            </div>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ color: '#f0f0f0', textDecoration: 'none', fontSize: 18, fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
              <a href="https://github.com/Akhila-1703" target="_blank" rel="noreferrer" style={{ color: '#888' }}><GithubIcon size={24} /></a>
              <a href="https://www.linkedin.com/in/dachepally-akhila-1685a2336/" target="_blank" rel="noreferrer" style={{ color: '#888' }}><LinkedinIcon size={24} /></a>
              <a href="#contact" onClick={() => setOpen(false)} style={{ color: '#888' }}><Mail size={24} /></a>
            </div>
          </div>
        )}

        <style>{`
          .hidden-mobile { display: flex; }
          .show-mobile   { display: none;  }
          
          .social-icon {
            color: #888;
            transition: color 0.2s, transform 0.2s;
          }
          .social-icon:hover {
            color: #fff;
            transform: scale(1.1);
          }

          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
          .pulse-dot { animation: pulse 2s infinite; }
          
          @media (max-width: 900px) {
            .hidden-mobile { display: none !important;  }
            .show-mobile   { display: block; }
          }
        `}</style>
      </header>
    </>
  )
}
