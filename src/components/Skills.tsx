import { FadeIn } from './FadeIn'

const skillGroups = [
  {
    label: 'Frontend',
    color: '#6366f1',
    skills: ['React.js', 'React 19', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    label: 'Backend & Databases',
    color: '#22c55e',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful APIs', 'JWT Auth', 'Bcryptjs', 'Nodemailer'],
  },
  {
    label: 'AI & Machine Learning',
    color: '#f59e0b',
    skills: ['Python', 'OpenCV', 'PyTorch', 'Pandas', 'Computer Vision', 'Model Training', 'Image Augmentation'],
  },
  {
    label: 'Security & Architecture',
    color: '#ec4899',
    skills: ['HTTP-only Cookies', 'XSS Mitigation', 'RBAC', 'Soft Deletion', 'Cron Scheduling', 'Immutable Ledgers'],
  },
  {
    label: 'Tools & Workflow',
    color: '#06b6d4',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Cloudinary', 'Postman'],
  },
  {
    label: 'Languages',
    color: '#8b5cf6',
    skills: ['JavaScript', 'Python', 'Java', 'HTML', 'CSS'],
  },
]

export function Skills() {
  return (
    <section id="skills" style={{
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
          Skills
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.03em', color: '#f0f0f0',
          marginBottom: 12,
        }}>
          What I work with
        </h2>
        <p style={{ color: '#666', fontSize: 15, maxWidth: 480, marginBottom: 56, lineHeight: 1.7 }}>
          Full-stack and AI skills — built through internships, real projects, and continuous self-learning.
        </p>
      </FadeIn>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20,
      }}>
        {skillGroups.map((group, i) => (
          <FadeIn key={group.label} delay={0.1 + i * 0.07}>
            <div style={{
              background: '#161616',
              border: '1px solid #2a2a2a',
              borderRadius: 14,
              padding: '22px 24px',
              transition: 'border-color 0.2s',
              height: '100%',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = group.color + '44')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2a2a')}
            >
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: group.color, flexShrink: 0,
                  boxShadow: `0 0 8px ${group.color}66`,
                }} />
                <span style={{ color: '#f0f0f0', fontWeight: 600, fontSize: 14 }}>{group.label}</span>
              </div>

              {/* Skill badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    background: group.color + '12',
                    border: `1px solid ${group.color}25`,
                    color: group.color,
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: 12,
                    fontWeight: 500,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
