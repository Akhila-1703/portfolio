import { FadeIn } from './FadeIn'
import { Code2, Shield, Cpu, Zap } from 'lucide-react'

const traits = [
  { Icon: Code2, label: 'Real business logic', desc: 'I build applications that handle actual complexity — ledgers, RBAC, cron scheduling — not just CRUD clones.' },
  { Icon: Shield, label: 'Security first', desc: 'HTTP-only JWTs, soft-deletion databases, and XSS-aware architectures are my standard, not an afterthought.' },
  { Icon: Cpu, label: 'AI + Web combined', desc: 'From training CV models at Mendygo to building full-stack platforms, I bridge machine learning with product development.' },
  { Icon: Zap, label: 'Fast learner', desc: 'Three technical internships across Python dev, AI research, and prototyping — all while studying full-time.' },
]

export function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>

      {/* Section label */}
      <FadeIn>
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          color: '#6366f1',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: 16,
        }}>
          About me
        </span>
      </FadeIn>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}
        className="about-grid">
        
        {/* Left — heading + bio */}
        <FadeIn delay={0.1}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: '#f0f0f0',
            marginBottom: 24,
          }}>
            I don't just write code.<br />
            <span style={{ color: '#6366f1' }}>I architect systems.</span>
          </h2>
          <p style={{ color: '#888', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            When I first started studying Computer Science, I spent a lot of time just following tutorials.
            But I quickly realized that you don't really learn how to code until you try to build something from scratch and watch it break.
          </p>
          <p style={{ color: '#888', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            I'm currently a <strong style={{ color: '#f0f0f0' }}>CSE undergraduate at Anurag University, Hyderabad</strong>,
            exploring the MERN stack and Machine Learning. Over the last two years, I've transitioned from writing
            basic Python algorithms to building full-scale web applications.
          </p>
          <p style={{ color: '#888', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            I've also had the chance to do three internships alongside my studies — from Python development
            at VirtuNexa, to training fire-detection AI models at Mendygo, to prototyping AI solutions
            during a Meta-backed sprint at VISWAM.AI.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { value: '3×', label: 'Tech Internships' },
              { value: '3', label: 'Full-Stack Projects' },
              { value: '5+', label: 'Google Certifications' },
              { value: '2027', label: 'Graduating' },
            ].map(s => (
              <div key={s.label} style={{
                background: '#161616',
                border: '1px solid #2a2a2a',
                borderRadius: 10,
                padding: '18px 20px',
              }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right — traits */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {traits.map(({ Icon, label, desc }, i) => (
            <FadeIn key={label} delay={0.15 + i * 0.08}>
              <div style={{
                background: '#161616',
                border: '1px solid #2a2a2a',
                borderRadius: 12,
                padding: '20px 22px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#6366f1')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: 'rgba(99,102,241,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="#6366f1" />
                </div>
                <div>
                  <div style={{ color: '#f0f0f0', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{label}</div>
                  <div style={{ color: '#666', fontSize: 13, lineHeight: 1.7 }}>{desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Education */}
      <FadeIn delay={0.3}>
        <div style={{ marginTop: 64 }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#f0f0f0', marginBottom: 24 }}>Education</h3>
          <div style={{
            background: '#161616',
            border: '1px solid #2a2a2a',
            borderRadius: 12,
            padding: '24px',
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#6366f1')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
          >
            <div style={{
              width: 56, height: 56, borderRadius: 12, background: 'rgba(99,102,241,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: '#6366f1', fontWeight: 800, fontSize: 20 }}>AU</span>
            </div>
            <div>
              <h4 style={{ color: '#f0f0f0', fontSize: 18, fontWeight: 600, margin: 0, marginBottom: 4 }}>Anurag University, Hyderabad</h4>
              <p style={{ color: '#888', fontSize: 15, margin: 0, marginBottom: 6 }}>B.Tech in Computer Science and Engineering</p>
              <div style={{ display: 'flex', gap: 16, color: '#666', fontSize: 13, fontWeight: 500 }}>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 4 }}>Graduating 2027</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
