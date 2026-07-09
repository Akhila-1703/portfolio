import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'

function App() {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App
