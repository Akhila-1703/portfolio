import { FadeIn } from './FadeIn'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Joint Secretary',
    company: 'CLOUD AU',
    period: 'Aug 2024 – May 2026',
    type: 'Leadership',
    location: 'Anurag University',
    bullets: [
      'Orchestrated university-level technology events for 200+ students, managing end-to-end organizational workflows and logistics.',
      'Coordinated technical initiatives and workshops alongside a core committee of 10+ members.',
    ],
    color: '#22c55e',
  },
  {
    role: 'Artificial Intelligence Researcher',
    company: 'Mendygo',
    period: 'Dec 2025 – Feb 2026',
    type: 'Internship · Remote',
    location: 'Remote',
    bullets: [
      'Managed the end-to-end model training process for a computer vision project focused on early hazard detection.',
      'Trained and optimized a fire and smoke detection ML model using Python, achieving ~85%+ validation accuracy.',
      'Processed and augmented a large-scale image dataset (~5,000+ data points) to improve reliability in low-light environments.',
      'Streamlined the training pipeline, reducing model evaluation time by ~15%.',
    ],
    color: '#6366f1',
  },
  {
    role: 'Python Developer',
    company: 'VirtuNexa',
    period: 'Jun 2025 · 1 mo',
    type: 'Internship · Remote',
    location: 'Remote',
    bullets: [
      'Engineered Python-based algorithmic solutions for 10+ complex problem statements.',
      'Managed version control and continuous deployment workflows through Git and GitHub, reducing merge conflicts by ~30%.',
      'Documented codebase features thoroughly, improving onboarding for future contributors.',
    ],
    color: '#f59e0b',
  },
  {
    role: 'Artificial Intelligence Engineer',
    company: 'VISWAM.AI — SoAI Program',
    period: 'May 2025 – Jun 2025',
    type: 'Internship · Remote',
    location: 'Remote · Meta × IIIT Hyderabad',
    bullets: [
      'Selected for an exclusive 4-week AI program backed by Meta and IIIT Hyderabad.',
      'Collaborated with a team to build and prototype an AI-driven solution, accelerating the development cycle by ~20%.',
      'Applied machine learning concepts to localized datasets, delivering a functional proof-of-concept.',
      'Presented technical architecture and findings to industry mentors.',
    ],
    color: '#ec4899',
  },
]

export function Experience() {
  return (
    <section id="experience" style={{
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
          Experience
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.03em', color: '#f0f0f0',
          marginBottom: 56,
        }}>
          Where I've worked<br />
          <span style={{ color: '#6366f1' }}>& what I built</span>
        </h2>
      </FadeIn>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 1, background: '#2a2a2a',
          display: 'none',
        }} className="timeline-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={0.1 + i * 0.08}>
              <div style={{
                background: '#161616',
                border: '1px solid #2a2a2a',
                borderRadius: 14,
                padding: '24px 28px',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = exp.color + '55')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: exp.color, flexShrink: 0,
                      }} />
                      <span style={{ color: '#f0f0f0', fontWeight: 600, fontSize: 16 }}>{exp.role}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#888', fontSize: 13 }}>
                        <Briefcase size={13} />
                        {exp.company}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#888', fontSize: 13 }}>
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{
                      background: exp.color + '18',
                      color: exp.color,
                      border: `1px solid ${exp.color}33`,
                      borderRadius: 999, padding: '3px 12px',
                      fontSize: 12, fontWeight: 500,
                    }}>
                      {exp.type}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#555', fontSize: 12 }}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: exp.color, marginTop: 6, flexShrink: 0, fontSize: 10 }}>▸</span>
                      <span style={{ color: '#888', fontSize: 14, lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
