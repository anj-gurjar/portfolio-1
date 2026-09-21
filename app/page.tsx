'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  GitBranch,
  Globe2,
  Network,
  Mail,
  MapPin,
  Menu,
  Moon,
  Play,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Zap,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Inspection Intelligence',
    type: 'Petrobot / Industrial IoT',
    description: 'A modular data platform that turns robotics and sensor streams into clear, actionable inspection workflows.',
    metrics: ['5 modules', '30% faster workflows'],
    stack: ['React', 'FastAPI', 'PostgreSQL'],
    tone: 'coral',
  },
  {
    number: '02',
    title: 'Finance Case Flow',
    type: 'Workflow automation',
    description: 'An end-to-end case management system that gives finance teams a faster, more auditable way to move work forward.',
    metrics: ['25% less processing time', 'RBAC + audit logs'],
    stack: ['Node.js', 'Express', 'PostgreSQL'],
    tone: 'lime',
  },
  {
    number: '03',
    title: 'Commerce, but considered',
    type: 'eCommerce platform',
    description: 'A reliable shopping experience with secure payments, inventory controls, and an admin system built for everyday use.',
    metrics: ['Secure checkout', 'MongoDB inventory'],
    stack: ['Angular', 'Node.js', 'MongoDB'],
    tone: 'blue',
  },
]

const experience = [
  ['2025 — now', 'Software Engineer', 'Petrobot Technology', '3D inspection dashboards, sensor pipelines, FastAPI architecture, and PostgreSQL performance tuning.'],
  ['2023 — 2024', 'Software Engineer', 'Velocis Systems', 'Finance case management, eCommerce, secure API gateways, RBAC, audit logging, and test automation.'],
  ['2019 — 2023', 'Systems Analyst', 'HCL Technologies', 'Telecom infrastructure, Node.js microservices, TypeScript migrations, AWS deployments, and observability.'],
]

const skills = ['React', 'TypeScript', 'Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Redux', 'REST APIs']

function AudioToggle() {
  const [playing, setPlaying] = useState(false)
  const audioContext = useRef<AudioContext | null>(null)
  const nodes = useRef<OscillatorNode[]>([])

  function toggleAudio() {
    if (playing) {
      nodes.current.forEach((node) => node.stop())
      nodes.current = []
      audioContext.current?.close()
      audioContext.current = null
      setPlaying(false)
      return
    }
    const context = new AudioContext()
    const gain = context.createGain()
    gain.gain.value = 0.018
    gain.connect(context.destination)
    ;[174, 220, 261.63].forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      oscillator.type = index === 1 ? 'triangle' : 'sine'
      oscillator.frequency.value = frequency
      oscillator.connect(gain)
      oscillator.start()
      nodes.current.push(oscillator)
    })
    audioContext.current = context
    setPlaying(true)
  }

  useEffect(() => () => {
    nodes.current.forEach((node) => node.stop())
    audioContext.current?.close()
  }, [])

  return (
    <button className="audio-toggle" onClick={toggleAudio} aria-label={playing ? 'Turn ambient audio off' : 'Turn ambient audio on'}>
      {playing ? <Volume2 size={15} /> : <VolumeX size={15} />}
      <span>{playing ? 'ambient on' : 'sound on'}</span>
    </button>
  )
}

function CatMouseMark() {
  return (
    <div className="cat-mouse" aria-hidden="true">
      <div className="mouse"><span /></div>
      <div className="cat"><i /><i /></div>
      <div className="chase-line" />
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <nav className="nav container">
        <a className="wordmark" href="#top" aria-label="Anjali Gurjar home"><span>AG</span> anjali gurjar</a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>about</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>contact</a>
        </div>
        <div className="nav-actions">
          <AudioToggle />
          <a className="nav-cta" href="#contact">let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> available for select projects <span className="eyebrow-line" /></div>
          <h1>Software with<br /><em>character.</em></h1>
          <p className="hero-intro">I&apos;m Anjali — a full-stack engineer who turns complex systems into calm, useful experiences for people and the businesses they run.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">see selected work <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#contact">start a conversation <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-art">
          <div className="circle circle-one" />
          <div className="circle circle-two" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-label label-top">full-stack / 04<span>years experience</span></div>
          <div className="art-label label-bottom"><Sparkles size={15} /> made for the real world</div>
          <CatMouseMark />
          <div className="hero-stamp"><span>build</span><span>better</span><span>things</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div className="marquee-track"><span>FRONTEND</span><i>✦</i><span>BACKEND</span><i>✦</i><span>PRODUCT THINKING</span><i>✦</i><span>FRONTEND</span><i>✦</i><span>BACKEND</span><i>✦</i><span>PRODUCT THINKING</span><i>✦</i></div>
      </section>

      <section className="work container section" id="work">
        <div className="section-heading"><div><p className="kicker">01 / selected work</p><h2>Things I&apos;ve<br /><em>shipped.</em></h2></div><p className="section-note">A few problems I&apos;ve helped solve across industrial tech, finance, telecom, and commerce.</p></div>
        <div className="project-list">
          {projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-metrics">{project.metrics.map((metric) => <span key={metric}><Check size={14} /> {metric}</span>)}</div></div>
            <div className="project-side"><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a href="#contact" aria-label={`Ask about ${project.title}`}><ArrowUpRight /></a></div>
          </article>)}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid"><div><p className="kicker">02 / the person behind the code</p><h2>Curious by<br /><em>default.</em></h2><p className="about-lead">Good software is a little like a good conversation: clear, thoughtful, and built around the person on the other side.</p><p className="about-body">With 4+ years across product engineering and systems work, I bring a practical mix of technical depth, visual care, and a bias toward shipping. I like messy problems, collaborative teams, and products that make someone&apos;s day a little easier.</p><div className="about-links"><a href="https://github.com/anjaligurjar" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/anjaligurjars" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="#contact"><Download size={17} /> Resume <ArrowUpRight size={14} /></a></div></div><div className="skill-panel"><div className="skill-panel-head"><Code2 size={18} /><span>my toolkit</span><span className="skill-count">12 things</span></div><div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={index % 4 === 0 ? 'featured' : ''}>{skill}</span>)}</div><div className="availability"><Zap size={17} /><div><strong>Currently building</strong><p>high-trust products with kind, ambitious people.</p></div></div></div></div>
      </section>

      <section className="experience container section"><div className="section-heading compact"><div><p className="kicker">03 / experience</p><h2>The path<br /><em>so far.</em></h2></div><BriefcaseBusiness size={30} strokeWidth={1.2} /></div><div className="timeline">{experience.map(([date, role, company, detail]) => <div className="timeline-row" key={company}><span className="timeline-date">{date}</span><div className="timeline-role"><h3>{role}</h3><strong>{company}</strong><p>{detail}</p></div><ArrowUpRight className="timeline-arrow" size={18} /></div>)}</div></section>

      <section className="contact section" id="contact"><div className="container contact-inner"><div><p className="kicker">04 / say hello</p><h2>Have a good<br /><em>one?</em></h2></div><div className="contact-copy"><p>Whether you&apos;re hiring, building, or just have a hard problem worth talking through — my inbox is open.</p><a className="email-link" href="mailto:anjalikgurjar@gmail.com">anjalikgurjar@gmail.com <ArrowUpRight /></a><div className="contact-meta"><span><MapPin size={15} /> India / working globally</span><span><Globe2 size={15} /> remote-friendly</span></div></div></div><div className="container contact-form-wrap"><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="form-row"><label>Your name<input required placeholder="Jane Smith" /></label><label>Your email<input required type="email" placeholder="jane@company.com" /></label></div><label>What are you working on?<textarea required rows={3} placeholder="Tell me a little about the project..." /></label><button className="button button-light" type="submit">{sent ? <>message ready <Check size={17} /></> : <>send a message <Send size={16} /></>}</button></form></div></section>

      <footer className="footer container"><span>© 2026 Anjali Gurjar</span><span>designed & built with care</span><span className="footer-mark">AG / <a href="#top">back to top ↑</a></span></footer>
    </main>
  )
}
