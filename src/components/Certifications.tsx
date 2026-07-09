import { FadeIn } from './FadeIn'
import { Award } from 'lucide-react'

const certs = [
  { name: 'Prompt Design in Vertex AI', issuer: 'Google Cloud', color: '#6366f1' },
  { name: 'Build Real World AI Apps with Gemini and Imagen', issuer: 'Google Cloud', color: '#6366f1' },
  { name: 'Inspect Rich Documents with Gemini Multimodality', issuer: 'Google Cloud', color: '#6366f1' },
  { name: 'Develop GenAI Apps with Gemini and Streamlit', issuer: 'Google Cloud', color: '#6366f1' },
  { name: 'Unstop Talent Park 2025', issuer: 'Unstop', color: '#f59e0b' },
]

export function Certifications() {
  return (
    <section id="certifications" style={{
      padding: '80px 24px',
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
          Certifications
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
          fontWeight: 700, letterSpacing: '-0.03em',
          color: '#f0f0f0', marginBottom: 40,
        }}>
          Verified credentials
        </h2>
      </FadeIn>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 14,
      }}>
        {certs.map((cert, i) => (
          <FadeIn key={cert.name} delay={0.08 + i * 0.07}>
            <div style={{
              background: '#161616',
              border: '1px solid #2a2a2a',
              borderRadius: 12,
              padding: '18px 20px',
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = cert.color + '44')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              <div style={{
                width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                background: cert.color + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Award size={16} color={cert.color} />
              </div>
              <div>
                <div style={{ color: '#f0f0f0', fontSize: 13, fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>
                  {cert.name}
                </div>
                <div style={{ color: '#555', fontSize: 12 }}>{cert.issuer}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
