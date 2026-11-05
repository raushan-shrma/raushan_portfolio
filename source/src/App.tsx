import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import DataRain from "./components/data-rain";
import { Reveal } from "./components/reveal";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { profile, projects, skillGroups } from "./data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a
          href="#home"
          className="brand"
          aria-label="Raushan Kumar, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">RK</span>
          <span className="brand-name">raushan<span>.dev</span></span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <DataRain
        count={76}
        flowSpeed={0.45}
        obstacleRadius={104}
        autopilot
        palette={["#a78bfa", "#818cf8", "#38bdf8"]}
      />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content container">
        <Reveal>
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1>
            Raushan <span>Kumar.</span>
          </h1>
          <p className="hero-role">
            Software Developer
          </p>
          <p className="hero-intro">
            I build thoughtful web experiences with React and TypeScript, and
            full-stack applications with Java, Spring Boot, REST APIs, and MySQL.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#projects">
                View projects <ArrowDownRight size={17} aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <Github size={17} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <Linkedin size={17} aria-hidden="true" />
            </a>
            <span className="social-divider" />
            <span className="hero-social-caption">Bangalore, India</span>
          </div>
        </Reveal>
        <div className="hero-index" aria-hidden="true">
          <span>01</span> / 06
        </div>
        <a className="scroll-cue" href="#about">
          Scroll to explore <span />
        </a>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  );
}

function About() {
  return (
    <section className="section section-about" id="about">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="A little about me"
            title="Curious by nature. Builder by choice."
            description="I enjoy turning ideas into useful, well-crafted software."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              I&apos;m a fresher software developer with a strong interest in
              frontend and Java full-stack development. I like working across the
              stack: shaping clear interfaces with React and TypeScript, then
              connecting them to dependable APIs and databases.
            </p>
            <p>
              My current toolkit includes Java, Spring Boot, REST APIs, and
              MySQL. I&apos;m always learning, building projects, and looking
              forward to contributing to a collaborative engineering team.
            </p>
            <a className="text-link" href="#contact">
              A bit more about working together <ArrowRight size={16} />
            </a>
          </Reveal>
          <Reveal className="about-facts" delay={100}>
            <Card className="fact-card">
              <div className="fact-icon"><Code2 size={19} /></div>
              <div>
                <p className="fact-label">My focus</p>
                <p className="fact-value">Frontend &amp; full-stack web</p>
              </div>
            </Card>
            <Card className="fact-card">
              <div className="fact-icon"><GraduationCap size={19} /></div>
              <div>
                <p className="fact-label">Education</p>
                <p className="fact-value">Atria Institute of Technology</p>
              </div>
            </Card>
            <Card className="fact-card">
              <div className="fact-icon"><Sparkles size={19} /></div>
              <div>
                <p className="fact-label">What I value</p>
                <p className="fact-value">Curiosity, craft &amp; collaboration</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-skills" id="skills">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="My toolkit"
            title="Tools for making things work."
            description="A growing set of technologies I use to build across the web stack."
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 70}>
              <Card className="skill-card">
                <div className="skill-card-top">
                  <Layers3 size={17} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{group.name}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Reveal className="project-reveal" delay={(index % 2) * 80}>
      <Card className="project-card">
        <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
          <div className="project-art-window">
            <div className="window-dots"><i /><i /><i /></div>
            <div className="project-art-lines">
              <span /><span /><span /><span /><span />
            </div>
            <div className="project-art-orbit" />
          </div>
          <span className="project-number">0{index + 1}</span>
        </div>
        <div className="project-body">
          <div className="project-meta">
            <span>{project.category}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github size={15} aria-hidden="true" /> Project URL
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live demo <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            {!project.github && !project.demo && (
              <span className="project-link-note">Project overview</span>
            )}
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

function Projects() {
  return (
    <section className="section section-projects" id="projects">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects, made with purpose."
            description="A selection of ideas explored through design, code, and problem solving."
          />
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        <Reveal className="projects-more">
          <a href={profile.github} target="_blank" rel="noreferrer">
            Explore my GitHub profile <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <>
      <section className="section section-experience" id="experience">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Professional experience"
              title="Learning by building."
              description="Hands-on experience improving Android application interfaces, integrations, and performance."
            />
          </Reveal>
          <Reveal>
            <Card className="experience-card">
              <div className="experience-icon"><BriefcaseBusiness size={21} /></div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <p className="experience-type">MindMatrix.io</p>
                    <h3>Android App Dev Intern</h3>
                  </div>
                  <span className="experience-current"><i /> Dec 2025 — June 2026</span>
                </div>
                <p>
                  Improved UI components and responsiveness for a better user
                  experience. Integrated APIs and optimized application data
                  flow. Fixed bugs and enhanced application performance.
                </p>
                <div className="internship-project">
                  <p className="experience-type">Internship project</p>
                  <h4>Namma Hasiru – Environmental Sustainability Project</h4>
                  <p>
                    Developed an eco-friendly platform to promote environmental
                    awareness, sustainable practices, and community participation
                    in creating a greener and cleaner environment. Focused on
                    encouraging responsible actions for a healthier future.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
      <section className="section section-education" id="education">
        <div className="container education-row">
          <Reveal className="education-intro">
            <p className="eyebrow">Education</p>
            <h2>Learning with intention.</h2>
            <p className="section-description">
              Building a strong foundation for a career in software development.
            </p>
          </Reveal>
          <Reveal className="education-detail" delay={100}>
            <div className="education-icon"><GraduationCap size={21} /></div>
            <div>
              <p className="experience-type">2022 — 2026</p>
              <h3>Atria Institute of Technology</h3>
              <p>Bangalore, India</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">Have a good one in mind?</p>
              <h2>Let&apos;s build something<br /><span>meaningful.</span></h2>
              <p className="contact-intro">
                Have an opportunity, a project idea, or just want to connect?
                I&apos;d be glad to hear from you.
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                <Mail size={17} aria-hidden="true" />
                {profile.email}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className="contact-email" href={`tel:${profile.phone}`}>
                <Phone size={17} aria-hidden="true" />
                {profile.phone}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github size={17} aria-hidden="true" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a message</h3>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" required />
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={4} required />
              <Button type="submit" className="contact-submit">
                Open email app <Send size={15} aria-hidden="true" />
              </Button>
              <p className="form-note" aria-live="polite">
                {sent ? (
                  <><Check size={14} /> Your message is ready in your email app.</>
                ) : (
                  "Your default email app will open with your message ready to send."
                )}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">RK</span>
          <span className="brand-name">raushan<span>.dev</span></span>
        </a>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Raushan Kumar</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
