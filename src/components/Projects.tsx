import { FadeIn } from './FadeIn'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'

const projects = [
  {
    number: '01',
    title: 'MealOra',
    subtitle: 'Enterprise Logistics & Food Delivery Platform',
    description: 'Built to solve the actual logistics of a daily Dabba (Tiffin) service — not just a simple CRUD food app.',
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Immutable wallet ledger tracking CREDIT and DEBIT transactions',
      'Interactive skip calendar with @fullcalendar/react and timezone-aware 11AM IST cutoffs',
      'Cron-job scheduler that auto-pauses billing when users skip meals',
      'Admin analytics dashboard (Recharts) for kitchen inventory prediction',
    ],
    accent: '#6366f1',
    github: 'https://github.com/Akhila-1703/mealora-app',
    live: null,
    tag: 'FinTech + Logistics',
  },
  {
    number: '02',
    title: 'Blog App',
    subtitle: 'Role-Based Content Publishing Platform',
    description: 'A secure publishing platform built to demonstrate advanced web security practices and multi-tiered user access.',
    stack: ['React 19', 'Vite', 'Express.js', 'MongoDB', 'Bcryptjs', 'JWT'],
    highlights: [
      'Soft-deletion architecture — articles are never hard-deleted (isArticleActive flag)',
      'JWTs stored exclusively in HTTP-only cookies to prevent XSS attacks',
      'Full RBAC — distinct middleware for Readers, Creators, and Administrators',
    ],
    accent: '#22c55e',
    github: 'https://github.com/Akhila-1703/blog-app',
    live: null,
    tag: 'Security + RBAC',
  },
  {
    number: '03',
    title: 'Peoplecare Hospital',
    subtitle: 'Centralized Healthcare Workflow System',
    description: 'Unifies patient records, doctor scheduling, and admin operations into a secure digital environment.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Nodemailer'],
    highlights: [
      'Dynamic scheduling with doctor availability checking and specialization filtering',
      'Secure patient history CRUD with protected multi-role access',
      'Email notifications via Nodemailer for appointment confirmations',
    ],
    accent: '#f59e0b',
    github: 'https://github.com/Akhila-1703/hospital-management-app',
    live: null,
    tag: 'Healthcare + Auth',
  },
]

export function Projects() {
  return (
    <section id="projects" style={{
      padding: '100px 24px',
      maxWidth: 1100,
      margin: '0 auto',
      borderTop: '1px solid #1a1a1a',
    }}>
      <FadeIn>
        <span style={{
          fontSize: 12, fontWeight: 600, color: '#6366f1',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          display: 'block', marginBottom: 16,
        }}>
          Projects
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.03em', color: '#f0f0f0',
          marginBottom: 12,
        }}>
          Real-world applications,<br />
          <span style={{ color: '#6366f1' }}>not portfolio clones</span>
        </h2>
        <p style={{ color: '#666', fontSize: 15, maxWidth: 520, marginBottom: 56, lineHeight: 1.7 }}>
          Each project was built to handle actual business logic that senior engineers care about —
          security, data integrity, and automation.
        </p>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={0.1 + i * 0.1}>
            <div style={{
              background: '#161616',
              border: '1px solid #2a2a2a',
              borderRadius: 16,
              overflow: 'hidden',
              transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = p.accent + '55')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              {/* Accent bar */}
              <div style={{ height: 3, background: p.accent, opacity: 0.7 }} />

              <div style={{ padding: '28px 32px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ color: p.accent, fontWeight: 700, fontSize: 13, opacity: 0.7 }}>{p.number}</span>
                      <span style={{
                        background: p.accent + '18',
                        color: p.accent,
                        border: `1px solid ${p.accent}33`,
                        borderRadius: 999,
                        padding: '2px 10px',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}>
                        {p.tag}
                      </span>
                    </div>
                    <h3 style={{ color: '#f0f0f0', fontWeight: 700, fontSize: 22, marginBottom: 4, letterSpacing: '-0.02em' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: 13 }}>{p.subtitle}</p>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        background: '#1e1e1e', border: '1px solid #2a2a2a',
                        color: '#888', borderRadius: 8, padding: '8px 14px',
                        fontSize: 13, fontWeight: 500, textDecoration: 'none',
                        transition: 'color 0.2s, border-color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.borderColor = '#444' }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#2a2a2a' }}
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: 6,
                          background: p.accent, color: '#fff',
                          borderRadius: 8, padding: '8px 14px',
                          fontSize: 13, fontWeight: 600, textDecoration: 'none',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: '#777', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                  {p.description}
                </p>

                {/* Two-column: highlights + stack */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start' }}
                  className="proj-grid">
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {p.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: p.accent, flexShrink: 0, marginTop: 5, fontSize: 10 }}>▸</span>
                        <span style={{ color: '#777', fontSize: 13, lineHeight: 1.7 }}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end', maxWidth: 280 }}>
                    {p.stack.map(s => (
                      <span key={s} style={{
                        background: '#1e1e1e', border: '1px solid #2a2a2a',
                        color: '#666', borderRadius: 6,
                        padding: '4px 10px', fontSize: 11, fontWeight: 500,
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
