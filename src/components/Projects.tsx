import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { ExternalLink, Layers } from 'lucide-react'
import { GithubIcon } from './Icons'

const projects = [
  {
    number: '01',
    title: 'MealOra',
    subtitle: 'Automated Daily Meal Logistics & Double-Entry FinTech Platform',
    description: 'Far beyond a basic food delivery app, MealOra is built to handle the complex, recurring subscription logistics of daily meal providers. It features immutable financial ledgers, timezone-aware business rule engines, and automated kitchen dispatch workflows.',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'Razorpay', 'Zustand'],
    highlights: [
      'Double-Entry Wallet Ledger: Tracks immutable credit & debit transactions for full financial auditability',
      'Timezone-Aware Logistics Engine: Enforces strict 11:00 AM IST cutoff rules for same-day delivery & cancellations',
      'Interactive Skip Calendar: Built with @fullcalendar/react to let users pause meals & auto-credit refunds to wallet',
      'Automated Cron Scheduler: Node-cron background jobs generate kitchen dispatch sheets & process recurring billing',
      'XSS-Shielded Auth: Session tokens stored exclusively in HTTP-Only, SameSite cookies with Zustand state hydration',
    ],
    accent: '#6366f1',
    github: 'https://github.com/Akhila-1703/mealora-app',
    live: 'https://mealora-app.vercel.app/',
    tag: 'FinTech + Logistics Engine',
    image: '/portfolio/mealora/mealora_2.png',
    gallery: [
      '/portfolio/mealora/mealora_1.png',
      '/portfolio/mealora/mealora_2.png',
      '/portfolio/mealora/mealora_3.png',
      '/portfolio/mealora/mealora_4.png',
      '/portfolio/mealora/mealora_5.png',
    ],
  },
  {
    number: '02',
    title: 'Blog App',
    subtitle: 'Enterprise Content Platform with 3-Tier RBAC & Soft-Deletion',
    description: 'An enterprise-grade publishing system engineered to demonstrate advanced web security, multi-tenant permission isolation, and audit-compliant data persistence. Designed for Readers, Authors, and System Administrators.',
    stack: ['React 19', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Bcryptjs', 'Cloudinary'],
    highlights: [
      '3-Tier Granular RBAC: Custom middleware discriminating permissions across Readers, Authors, and Admins',
      'Soft-Deletion Architecture: Articles are deactivated (isArticleActive) rather than hard-deleted for audit compliance',
      'Stateless Cookie Security: JWT authentication Served strictly in HTTP-Only cookies to prevent XSS attacks',
      'Cloudinary Pipeline: Dynamic image optimization & CDN hosting for user avatars and article headers',
      'Embedded Subdocuments: Atomic Mongoose schema design for high-performance nested comment threads',
    ],
    accent: '#22c55e',
    github: 'https://github.com/Akhila-1703/blog-app',
    live: 'https://blog-app-xi-lovat.vercel.app/',
    tag: 'Security + 3-Tier RBAC',
    image: '/portfolio/blog/blog_1.png',
    gallery: [
      '/portfolio/blog/blog_1.png',
      '/portfolio/blog/blog_2.png',
    ],
  },
  {
    number: '03',
    title: 'Peoplecare Hospital',
    subtitle: 'Centralized Electronic Health Record (EHR) & Clinical Workflow Platform',
    description: 'A comprehensive healthcare operations system unifying patient record management, doctor scheduling, prescriptions, and multi-role administrative workflows to optimize hospital resources and patient care.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'REST API'],
    highlights: [
      'Conflict-Free Scheduling Engine: Real-time doctor availability checks filtered by specialization to prevent double-booking',
      'EHR & Prescription CRUD: Secure digital tracking of patient medical histories, diagnostic notes, and prescriptions',
      'Multi-Portal RBAC Isolation: Separate operational dashboards for Patients, Doctors, and Hospital Administrators',
      'Automated Notification System: Integrated Nodemailer service sending real-time appointment confirmations',
    ],
    accent: '#f59e0b',
    github: 'https://github.com/Akhila-1703/hospital-management-app',
    live: 'https://hospital-management-app-xi.vercel.app/',
    tag: 'Healthcare EHR + Auth',
    image: '/portfolio/hospital/hospital_1.png',
    gallery: [
      '/portfolio/hospital/hospital_1.png',
      '/portfolio/hospital/hospital_2.png',
    ],
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
                  <ProjectVisualCard project={p} />
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

function ProjectVisualCard({ project }: { project: any }) {
  const [activeImg, setActiveImg] = useState(project.image)

  return (
    <div
      className="project-visual-card"
      style={{
        background: '#141414',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Browser Window Bar */}
      <div style={{
        background: '#1e1e1e',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
        </div>
        <span style={{ color: '#666', fontSize: 11, fontWeight: 500, letterSpacing: '0.04em' }}>
          {project.title.toLowerCase()}.app
        </span>
        <div style={{ width: 34 }} />
      </div>

      {/* Main Image Screenshot View */}
      <div style={{ position: 'relative', height: 260, overflow: 'hidden', background: '#0a0a0a' }}>
        <img
          src={activeImg}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            transition: 'all 0.3s ease-in-out',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Interactive Gallery Selector for MealOra */}
      {project.gallery && project.gallery.length > 0 && (
        <div style={{
          padding: '12px 16px',
          background: '#161616',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          overflowX: 'auto',
        }}>
          <span style={{ color: '#666', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, marginRight: 4 }}>
            <Layers size={12} /> Screens:
          </span>
          {project.gallery.map((imgUrl: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveImg(imgUrl)}
              style={{
                width: 44,
                height: 28,
                borderRadius: 6,
                overflow: 'hidden',
                border: activeImg === imgUrl ? `2px solid ${project.accent}` : '1px solid rgba(255,255,255,0.1)',
                padding: 0,
                cursor: 'pointer',
                opacity: activeImg === imgUrl ? 1 : 0.5,
                transition: 'all 0.2s',
                flexShrink: 0,
                background: '#000',
              }}
            >
              <img src={imgUrl} alt={`Screen ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
