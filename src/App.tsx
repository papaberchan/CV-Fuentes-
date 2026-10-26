import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Award, Check, ChevronRight, Clipboard, Download, ExternalLink, GraduationCap, MapPin, Menu, Moon, Send, Sun, X } from 'lucide-react'
import { experiences, highlights, interests, profile, projects, roles, skillGroups } from './data/portfolio'

const nav = ['About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact']
const social = [{ label: 'GitHub', href: profile.github }, { label: 'LinkedIn', href: profile.linkedin }, { label: 'Facebook', href: profile.facebook }, { label: 'Instagram', href: profile.instagram }, { label: 'TikTok', href: profile.tiktok }]

function SocialIcon({ platform }: { platform: string }) {
  const shared = { 'aria-hidden': true as const, viewBox: '0 0 24 24', fill: 'currentColor' }

  switch (platform) {
    case 'GitHub':
      return <svg {...shared}><path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.37-3.87-1.37-.53-1.36-1.28-1.73-1.28-1.73-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.8 2.7 1.29 3.36.98.1-.75.4-1.28.73-1.57-2.56-.3-5.25-1.3-5.25-5.8 0-1.28.46-2.34 1.22-3.17-.12-.3-.53-1.49.12-3.11 0 0 1-.32 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.62.24 2.81.12 3.11.76.83 1.22 1.89 1.22 3.17 0 4.51-2.7 5.5-5.27 5.79.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
    case 'LinkedIn':
      return <svg {...shared}><path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56c0 .95.79 1.72 1.77 1.72h20.46c.98 0 1.77-.77 1.77-1.72V1.72c0-.95-.79-1.72-1.77-1.72Z" /></svg>
    case 'Facebook':
      return <svg {...shared}><path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.57 1.6-1.57h1.7V3.13c-.3-.04-1.33-.13-2.53-.13-2.51 0-4.23 1.53-4.23 4.34V9.6H7.2v3.2h2.84V21h3.46Z" /></svg>
    case 'Instagram':
      return <svg {...shared} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
    case 'TikTok':
      return <svg {...shared}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.32V2h-3.46v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.9.14V9.37a6.3 6.3 0 0 0-.9-.07 6.37 6.37 0 0 0-6.37 6.37 6.37 6.37 0 0 0 6.37 6.37 6.37 6.37 0 0 0 6.37-6.37V9.02a8.2 8.2 0 0 0 4.8 1.54V7.1a4.85 4.85 0 0 1-1.04-.41Z" /></svg>
    default:
      return null
  }
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, ease: 'easeOut' }}>{children}</motion.div>
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export default function App() {
  const reduced = useReducedMotion()
  const [theme, setTheme] = useState<'dark' | 'light'>(() => localStorage.getItem('sf-theme') as 'dark' | 'light' || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('About')
  const [roleIndex, setRoleIndex] = useState(0)
  const [toast, setToast] = useState('')
  const [skillTab, setSkillTab] = useState(0)

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('sf-theme', theme) }, [theme])
  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2800)
    return () => window.clearInterval(timer)
  }, [])
  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id[0].toUpperCase() + entry.target.id.slice(1))), { rootMargin: '-35% 0px -55% 0px' })
    sections.forEach((section) => observer.observe(section)); return () => observer.disconnect()
  }, [])
  const copyEmail = async () => { await navigator.clipboard.writeText(profile.email); setToast('Email copied to clipboard'); window.setTimeout(() => setToast(''), 2600) }
  const jump = (id: string) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return <>
    <div className="grain" aria-hidden="true" /><div className="progress" aria-hidden="true" />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Sylver Fuentes home"><b>SF</b><span>Sylver Fuentes</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{nav.map((item) => <button className={active === item ? 'active' : ''} onClick={() => jump(item)} key={item}>{item}</button>)}</nav>
      <div className="header-actions"><button className="theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Switch color theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.p className="availability" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}><span />Open to learning opportunities</motion.p>
          <motion.h1 id="hero-title" initial={reduced ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .7 }}>Hi, I’m <em>Sylver</em><br />Fuentes.</motion.h1>
          <motion.div className="role" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .42 }}><span>Currently exploring</span><strong key={roles[roleIndex]}>{roles[roleIndex]}</strong></motion.div>
          <motion.p className="hero-lede" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>An aspiring IT professional with a passion for technology, creativity, and continuous learning.</motion.p>
          <motion.div className="cta-row" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48 }}><button className="button primary" onClick={() => jump('Projects')}>Explore my work <ArrowDownRight size={18} /></button><button className="button ghost" onClick={() => window.print()}><Download size={17} /> Download CV</button></motion.div>
          <div className="location"><MapPin size={16} /> {profile.location}</div>
        </div>
        <motion.div className="portrait-area" initial={reduced ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .18 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait"><img src="/images/sylver-profile.jpg" alt="Portrait of Sylver Fuentes wearing a suit and glasses" /><div className="portrait-label"><span>SF</span><small>BSIT · 2026</small></div></div>
          <div className="floating-note">Learn, create,<br /><i>grow.</i></div>
        </motion.div>
        <a className="scroll-cue" href="#about">Scroll to discover <ChevronRight size={15} /></a>
      </section>

      <section id="about" className="section about">
        <Reveal><SectionTitle eyebrow="01 · A little about me" title="Curious by nature. Grounded by purpose." /></Reveal>
        <Reveal className="about-grid"><p className="large-copy">I’m Sylver, a fourth-year Bachelor of Science in Information Technology student at <strong>Davao del Norte State College.</strong> I enjoy discovering new things, exploring technology, and expressing creativity through video editing, photography-related work, and hands-on projects.</p><div><p>I’m still developing my technical expertise, but I believe that being willing to learn, staying respectful, and improving consistently matter. I appreciate focused work, quiet productivity, and meaningful connections—and I’m working toward becoming a dependable IT professional.</p><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a></div></Reveal>
        <div className="highlight-grid">{highlights.map(({ label, value, icon: Icon }) => <Reveal key={label}><article className="highlight"><Icon size={19} /><span>{label}</span><strong>{value}</strong></article></Reveal>)}</div>
      </section>

      <section id="objective" className="objective-band"><Reveal><span className="eyebrow">Career objective</span><blockquote>“To build a meaningful career in information technology by gaining hands-on experience, strengthening my technical and interpersonal skills, and continuously learning new technologies.”</blockquote><p>I aspire to be reliable, punctual, adaptable, and respectful—contributing positively while improving through every opportunity.</p></Reveal></section>

      <section id="education" className="section">
        <Reveal><SectionTitle eyebrow="02 · Education" title="Learning with intention." copy="An academic path shaped by practical curiosity and steady progress." /></Reveal>
        <Reveal className="education-card"><div className="edu-icon"><GraduationCap /></div><div><span className="eyebrow">Currently studying</span><h3>Bachelor of Science in<br /><em>Information Technology</em></h3><p>Davao del Norte State College · Fourth Year</p></div><span className="place"><MapPin size={15} /> Panabo City, Philippines</span></Reveal>
        <Reveal className="secondary-edu"><span>Earlier foundation</span><div><strong>Senior High School · Grade 12</strong><p>TESDA National Certificate II earned. School, strand, and qualification details can be added when confirmed.</p></div></Reveal>
      </section>

      <section id="skills" className="section skills-section">
        <Reveal><SectionTitle eyebrow="03 · Skills & strengths" title="Growing through practice." copy="A transparent view of areas I’m exploring, learning, and applying." /></Reveal>
        <div className="tabs" role="tablist" aria-label="Skill categories">{skillGroups.map((group, index) => <button role="tab" aria-selected={skillTab === index} className={skillTab === index ? 'selected' : ''} onClick={() => setSkillTab(index)} key={group.name}>{group.name}</button>)}</div>
        <Reveal><div className="skill-panel"><div><span className="eyebrow">{skillGroups[skillTab].name}</span><p>{skillGroups[skillTab].note}</p></div><div className="skill-list">{skillGroups[skillTab].skills.map(([name, status]) => <article key={name}><span>{name}</span><small>{status}</small></article>)}</div></div></Reveal>
      </section>

      <section id="projects" className="section projects-section">
        <Reveal><SectionTitle eyebrow="04 · Selected work" title="Small steps, real projects." copy="A collection of academic and learning repositories connected to my GitHub profile." /></Reveal>
        <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title}><article className={'project-card project-' + index}><div className="project-visual"><span>{String(index + 1).padStart(2, '0')}</span><CodeGlyph /></div><div className="project-meta"><span>{project.category}</span><small>{project.status}</small></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer">View repository <ExternalLink size={15} /></a></article></Reveal>)}</div>
      </section>

      <section id="experience" className="section experience-section">
        <Reveal><SectionTitle eyebrow="05 · Experience & community" title="Showing up for work and community." copy="Experience that includes both professional interaction and local involvement." /></Reveal>
        <div className="timeline">{experiences.map((item, index) => <Reveal key={item.role}><article className="timeline-item"><div className="timeline-dot">0{index + 1}</div><div className="timeline-main"><div className="timeline-heading"><div><span>{item.org}</span><h3>{item.role}</h3></div><small>{item.period}</small></div><p>{item.description}</p><div className="tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></article></Reveal>)}</div>
      </section>

      <section id="certifications" className="section certificate-section"><Reveal><article className="certificate"><div className="certificate-stamp"><Award size={32} /></div><div><span className="eyebrow">Achievement & certification</span><h2>TESDA National Certificate II</h2><p>Earned during Grade 12. The exact qualification may be added here once it is confirmed.</p></div><span className="earned">Earned <Check size={15} /></span></article></Reveal></section>

      <section id="interests" className="section interests-section"><Reveal><SectionTitle eyebrow="06 · Beyond the screen" title="Creative energy, in different forms." /></Reveal><div className="bento">{interests.map(({ title, description, icon: Icon, className }) => <Reveal className={className} key={title}><article className="interest"><Icon /><h3>{title}</h3><p>{description}</p><ArrowUpRight size={18} /></article></Reveal>)}</div></section>

      <section id="contact" className="contact-section"><Reveal><div><span className="eyebrow">07 · Get in touch</span><h2>Let’s make a<br /><em>meaningful connection.</em></h2><p>Interested in an opportunity, a project, or simply want to say hello? I’d be glad to hear from you.</p></div><div className="contact-actions"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a><div className="contact-buttons"><button onClick={copyEmail}><Clipboard size={16} /> Copy email</button><a href={`mailto:${profile.email}?subject=Hello Sylver`}><Send size={16} /> Send a message</a></div>{profile.showPhone && <a className="phone" href={`tel:${profile.phone}`}>{profile.phone}</a>}<div className="socials">{social.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in new tab)`}><SocialIcon platform={label} /></a>)}</div></div></Reveal></section>
    </main>
    <footer><a className="brand" href="#top"><b>SF</b><span>Sylver Fuentes</span></a><p>Designed with care, curiosity, and room to grow.</p><span>© {new Date().getFullYear()} Sylver Fuentes</span></footer>
    {toast && <div className="toast" role="status"><Check size={16} />{toast}</div>}
  </>
}

function CodeGlyph() { return <svg className="glyph" viewBox="0 0 120 80" aria-hidden="true"><path d="M35 18 14 40l21 22M85 18l21 22-21 22M69 13 51 68" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg> }
