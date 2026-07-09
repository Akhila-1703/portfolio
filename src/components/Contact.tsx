import { FadeIn } from './FadeIn'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export function Contact() {
  return (
    <section id="contact" style={{
      padding: '100px 24px',
      maxWidth: 1100,
      margin: '0 auto',
      borderTop: '1px solid #1a1a1a',
    }}>
      <div style={{ maxWidth: 600 }}>
        <FadeIn>
          <span style={{
            fontSize: 12, fontWeight: 600, color: '#6366f1',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            display: 'block', marginBottom: 16,
          }}>
            Contact
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, lineHeight: 1.15,
            letterSpacing: '-0.03em', color: '#f0f0f0',
            marginBottom: 16,
          }}>
            Let's build something<br />
            <span style={{ color: '#6366f1' }}>real together</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{ color: '#666', fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>
            I'm actively looking for SWE or ML internship and new-grad roles where I can
            learn from strong engineers and ship software that solves actual problems.
            Feel free to reach out — I read every message!
          </p>
        </FadeIn>

        {/* Primary email CTA */}
        <FadeIn delay={0.28}>
          <a
            href="mailto:akhiladhachepally@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#6366f1',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.15s',
              marginBottom: 40,
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
          >
            <Mail size={18} />
            akhiladhachepally@gmail.com
            <ArrowUpRight size={16} />
          </a>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.36}>
          <div style={{ display: 'flex', gap: 14 }}>
            {[
              {
                href: 'https://github.com/Akhila-1703',
                Icon: GithubIcon,
                label: 'GitHub',
                desc: 'github.com/Akhila-1703',
              },
              {
                href: 'https://www.linkedin.com/in/dachepally-akhila-1685a2336/',
                Icon: LinkedinIcon,
                label: 'LinkedIn',
                desc: 'dachepally-akhila',
              },
            ].map(({ href, Icon, label, desc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  background: '#161616',
                  border: '1px solid #2a2a2a',
                  borderRadius: 12,
                  padding: '16px 18px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.transform = 'none' }}
              >
                <Icon size={20} color="#6366f1" />
                <div>
                  <div style={{ color: '#f0f0f0', fontSize: 13, fontWeight: 600 }}>{label}</div>
                  <div style={{ color: '#555', fontSize: 12 }}>{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 80,
        paddingTop: 32,
        borderTop: '1px solid #1a1a1a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{ color: '#f0f0f0', fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em' }}>
          Akhila<span style={{ color: '#6366f1' }}>.</span>
        </span>
        <span style={{ color: '#444', fontSize: 13 }}>
          © 2026 Dachepally Akhila · Built with React + Vite
        </span>
      </div>
    </section>
  )
}
