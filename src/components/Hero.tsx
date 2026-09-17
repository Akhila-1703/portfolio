// Hero.tsx

const projectImages = [
  '/portfolio/mealora/mealora_1.png',
  '/portfolio/mealora/mealora_2.png',
  '/portfolio/mealora/mealora_3.png',
  '/portfolio/mealora/mealora_4.png',
  '/portfolio/mealora/mealora_5.png',
  '/portfolio/blog/blog_1.png',
  '/portfolio/blog/blog_2.png',
  '/portfolio/hospital/hospital_1.png',
  '/portfolio/hospital/hospital_2.png',
]

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 24px',
        margin: '0 auto',
        paddingTop: 80,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Name — single line */}
      <h1 className="fade-up"
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: 16,
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ color: '#f0f0f0' }}>Dachepally </span>
        <span style={{ color: '#6366f1' }}>Akhila</span>
      </h1>

      {/* Role line */}
      <p className="fade-up delay-2" style={{
        fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
        color: '#888',
        fontWeight: 400,
        marginBottom: 12,
        maxWidth: 550,
        lineHeight: 1.6,
        textAlign: 'center',
      }}>
        CS Undergraduate · Full-Stack (MERN) Developer · AI Researcher
        <br />
        <span style={{ color: '#6366f1', fontWeight: 500 }}>3× Tech Intern</span>
        {' '}— Anurag University, Hyderabad
      </p>

      {/* Short pitch */}
      <p className="fade-up delay-3" style={{
        fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
        color: '#666',
        fontWeight: 400,
        marginBottom: 48,
        maxWidth: 500,
        lineHeight: 1.7,
        textAlign: 'center',
      }}>
        Building enterprise-grade web applications with secure auth, automated workflows, and clean, scalable architecture.
      </p>

      {/* Infinite Project UI Marquee — full width */}
      <div className="fade-up delay-4" style={{
        width: '100vw',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}>
        <div className="marquee-track" style={{ display: 'flex', gap: 20, width: 'max-content' }}>
          {[...projectImages, ...projectImages, ...projectImages].map((imgUrl, i) => (
            <div key={i} style={{
              width: 300,
              height: 190,
              borderRadius: 14,
              overflow: 'hidden',
              flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.06)',
              background: '#111',
            }}>
              <img
                src={imgUrl}
                alt="Project UI"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.65,
                  transition: 'opacity 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-2 { animation-delay: 0.15s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.45s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}
