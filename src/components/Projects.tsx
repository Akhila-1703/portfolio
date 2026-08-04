import { FadeIn } from './FadeIn'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './Icons'

const projects = [
  {
    number: '01',
    title: 'MealOra',
    subtitle: 'Enterprise Logistics & Food Delivery Platform',
    description: 'Built to solve the actual logistics of a daily Dabba (Tiffin) service — not just a simple CRUD food app. Handles complex state across immutable ledgers and timezone-aware cron jobs.',
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Immutable wallet ledger tracking CREDIT and DEBIT transactions',
      'Interactive skip calendar with @fullcalendar/react and timezone-aware 11AM IST cutoffs',
      'Cron-job scheduler that auto-pauses billing when users skip meals',
      'Admin analytics dashboard (Recharts) for kitchen inventory prediction',
    ],
    accent: '#6366f1',
    github: 'https://github.com/Akhila-1703/mealora-app',
    live: 'https://mealora-app.vercel.app/',
    tag: 'FinTech + Logistics',
  },
  {
    number: '02',
    title: 'Blog App',
    subtitle: 'Role-Based Content Publishing Platform',
    description: 'A secure publishing platform built to demonstrate advanced web security practices and multi-tiered user access. Designed for content creators and administrators.',
    stack: ['React 19', 'Vite', 'Express.js', 'MongoDB', 'Bcryptjs', 'JWT'],
    highlights: [
      'Soft-deletion architecture — articles are never hard-deleted (isArticleActive flag)',
      'JWTs stored exclusively in HTTP-only cookies to prevent XSS attacks',
      'Full RBAC — distinct middleware for Readers, Creators, and Administrators',
    ],
    accent: '#22c55e',
    github: 'https://github.com/Akhila-1703/blog-app',
    live: 'https://blog-app-xi-lovat.vercel.app/',
    tag: 'Security + RBAC',
  },
  {
    number: '03',
    title: 'Peoplecare Hospital',
    subtitle: 'Centralized Healthcare Workflow System',
    description: 'Unifies patient records, doctor scheduling, and admin operations into a secure digital environment, optimizing clinic resources and improving patient experience.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Nodemailer'],
    highlights: [
      'Dynamic scheduling with doctor availability checking and specialization filtering',
      'Secure patient history CRUD with protected multi-role access',
      'Email notifications via Nodemailer for appointment confirmations',
    ],
    accent: '#f59e0b',
    github: 'https://github.com/Akhila-1703/hospital-management-app',
    live: 'https://hospital-management-app-xi.vercel.app/',
    tag: 'Healthcare + Auth',
  },
]

export function Projects() {
  return (
    <section id="projects" style={{
      padding: '100px 24px',
      maxWidth: 1200,
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
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800, lineHeight: 1.15,
          letterSpacing: '-0.03em', color: '#f0f0f0',
          marginBottom: 16,
        }}>
          Real-world applications,<br />
          <span style={{ color: '#6366f1' }}>not portfolio clones</span>
        </h2>
        <p style={{ color: '#666', fontSize: 16, maxWidth: 600, marginBottom: 80, lineHeight: 1.7 }}>
          Each project was built to handle actual business logic that senior engineers care about —
          security, data integrity, and automation.
        </p>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
        {projects.map((p, i) => {
          const isEven = i % 2 !== 0;
          return (
            <FadeIn key={p.title} delay={0.1}>
              <div 
                className={`project-row ${isEven ? 'is-even' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  justifyContent: 'space-between',
                }}
              >
                {/* Visual / 3D Card Side */}
                <div 
                  className="project-visual-container"
                  style={{
                    flex: '1 1 50%',
                    perspective: 1200,
                  }}
                >
                  <div 
                    className="project-visual-card"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}15 0%, #161616 100%)`,
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: 24,
                      padding: 40,
                      minHeight: 360,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      position: 'relative',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div style={{
                      transform: 'translateZ(40px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ color: p.accent, fontWeight: 800, fontSize: 48, opacity: 0.2 }}>{p.number}</span>
                      </div>
                      <h3 style={{ color: '#f0f0f0', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em', margin: 0 }}>
                        {p.title}
                      </h3>
                      <p style={{ color: '#888', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                        {p.subtitle}
                      </p>
                    </div>
                    {/* Floating decoration element inside 3D space */}
                    <div style={{
                      position: 'absolute',
                      bottom: 40,
                      right: 40,
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${p.accent} 0%, transparent 70%)`,
                      filter: 'blur(30px)',
                      opacity: 0.3,
                      transform: 'translateZ(20px)',
                    }} />
                  </div>
                </div>

                {/* Content Side */}
                <div 
                  className="project-content-side"
                  style={{
                    flex: '1 1 50%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                  }}
                >
                  <div style={{
                    background: p.accent + '12',
                    color: p.accent,
                    border: `1px solid ${p.accent}33`,
                    borderRadius: 999,
                    padding: '6px 16px',
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    width: 'fit-content',
                  }}>
                    {p.tag}
                  </div>
                  
                  <p style={{ color: '#a0a0a0', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                    {p.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0, margin: 0 }}>
                    {p.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ color: p.accent, flexShrink: 0, marginTop: 4, fontSize: 14 }}>✧</span>
                        <span style={{ color: '#777', fontSize: 14, lineHeight: 1.7 }}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                    {p.stack.map(s => (
                      <span key={s} style={{
                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                        color: '#888', borderRadius: 999,
                        padding: '6px 14px', fontSize: 12, fontWeight: 500,
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-btn"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        background: '#f0f0f0', color: '#0f0f0f',
                        borderRadius: 999, padding: '10px 20px',
                        fontSize: 13, fontWeight: 600, textDecoration: 'none',
                      }}
                    >
                      <GithubIcon size={16} /> Source Code
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-btn"
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          background: 'rgba(255,255,255,0.05)', color: '#f0f0f0',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 999, padding: '10px 20px',
                          fontSize: 13, fontWeight: 600, textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </FadeIn>
          )
        })}
      </div>

      <style>{`
        /* Desktop Hover Effects */
        @media (min-width: 900px) {
          .project-visual-container:hover .project-visual-card {
            transform: rotateY(5deg) rotateX(2deg) scale(1.02);
            box-shadow: -20px 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1);
          }
          
          /* For even rows (reversed layout), rotate the opposite way */
          .is-even .project-visual-container:hover .project-visual-card {
            transform: rotateY(-5deg) rotateX(2deg) scale(1.02);
            box-shadow: 20px 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1);
          }
        }

        .pill-btn {
          transition: transform 0.2s, opacity 0.2s;
        }
        .pill-btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* Mobile Layout */
        @media (max-width: 900px) {
          .project-row {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .project-visual-card {
            min-height: 240px !important;
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}
