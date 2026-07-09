import { Mail, ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 24px',
        maxWidth: 1100,
        margin: '0 auto',
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* Status badge */}
      <div
        className="fade-up"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.2)',
          borderRadius: 999,
          padding: '6px 14px',
          marginBottom: 32,
          width: 'fit-content',
          animationDelay: '0.1s',
          opacity: 0,
          animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards',
        }}
      >
        <span style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#22c55e',
          display: 'inline-block',
          boxShadow: '0 0 8px #22c55e',
        }} />
        <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 500 }}>
          Open to internships &amp; opportunities
        </span>
      </div>

      {/* Name */}
      <h1
        style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: '#f0f0f0',
          marginBottom: 16,
          opacity: 0,
          animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
        }}
      >
        Dachepally
        <br />
        <span style={{ color: '#6366f1' }}>Akhila</span>
      </h1>

      {/* Role line */}
      <p
        style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
          color: '#888',
          fontWeight: 400,
          marginBottom: 24,
          maxWidth: 560,
          lineHeight: 1.6,
          opacity: 0,
          animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s forwards',
        }}
      >
        CS Undergraduate · Full-Stack (MERN) Developer · AI Researcher
        <br />
        <span style={{ color: '#6366f1', fontWeight: 500 }}>3× Tech Intern</span>
        {' '}— Anurag University, Hyderabad
      </p>

      {/* Short pitch */}
      <p
        style={{
          fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)',
          color: '#666',
          fontWeight: 400,
          marginBottom: 40,
          maxWidth: 500,
          lineHeight: 1.7,
          opacity: 0,
          animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s forwards',
        }}
      >
        I build enterprise-grade web applications that handle real business logic —
        immutable ledgers, secure auth, and automated scheduling. Not just portfolio clones.
      </p>

      {/* CTA buttons */}
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          marginBottom: 48,
          opacity: 0,
          animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s forwards',
        }}
      >
        <a
          href="#projects"
          style={{
            background: '#6366f1',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'opacity 0.2s, transform 0.15s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
        >
          View Projects
        </a>
        <a
          href="https://github.com/Akhila-1703"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            color: '#f0f0f0',
            padding: '12px 28px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid #2a2a2a',
            transition: 'border-color 0.2s, transform 0.15s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.transform = 'none' }}
        >
          GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            color: '#888',
            padding: '12px 28px',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            border: '1px solid #2a2a2a',
            transition: 'color 0.2s, border-color 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.borderColor = '#444' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#2a2a2a' }}
        >
          Resume ↗
        </a>
      </div>

      {/* Socials row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          opacity: 0,
          animation: 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s forwards',
        }}
      >
        {[
          { href: 'https://github.com/Akhila-1703', Icon: GithubIcon, label: 'GitHub' },
          { href: 'https://www.linkedin.com/in/dachepally-akhila-1685a2336/', Icon: LinkedinIcon, label: 'LinkedIn' },
          { href: 'mailto:akhiladhachepally@gmail.com', Icon: Mail, label: 'Email' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: '#555',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#6366f1')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555')}
          >
            <Icon size={20} />
          </a>
        ))}
        <div style={{ width: 1, height: 20, background: '#2a2a2a', margin: '0 4px' }} />
        <span style={{ color: '#555', fontSize: 13 }}>akhiladhachepally@gmail.com</span>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#444',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          textDecoration: 'none',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.08em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#6366f1')}
        onMouseLeave={e => (e.currentTarget.style.color = '#444')}
      >
        <span>SCROLL</span>
        <ArrowDown size={16} style={{ animation: 'fade-up 1s ease-in-out infinite alternate' }} />
      </a>
    </section>
  )
}
