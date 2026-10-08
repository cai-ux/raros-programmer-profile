export default function Home() {
  const projects = [
    ["Personal Portfolio Website", "A cute and responsive personal portfolio created to introduce my skills, interests, and college journey.", ["Next.js", "CSS", "Frontend"]],
    ["System Development Project", "A system project that I am currently working on while practicing programming, system design, and development.", ["Programming", "Systems", "In Progress"]]
  ];

  return (
    <main>
      <nav className="navbar"><div className="nav-inner">
        <a className="brand" href="#home">Rachelle<span>♡</span></a>
        <div className="nav-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
      </div></nav>

      <section id="home" className="hero section">
        <div className="cloud cloud-one">☁</div><div className="cloud cloud-two">☁</div>
        <div className="hero-text">
          <p className="eyebrow">♡ programmer in progress</p>
          <h1>Hello, I’m <span>Rachelle Raros!</span></h1>
          <p className="lead">Welcome to my personal portfolio! I am an Information Technology student who is interested in technology, programming, and creating digital solutions.</p>
          <p className="lead">I enjoy learning how applications and websites are developed and exploring how technology can make everyday tasks easier.</p>
          <div className="buttons"><a className="button primary" href="#projects">View Projects</a><a className="button secondary" href="#contact">Contact Me</a></div>
          <p className="tagline">Building Skills Today, Creating Solutions Tomorrow.</p>
        </div>
        <div className="code-card">
          <div className="window-top"><span>●</span><span>●</span><span>●</span></div>
          <pre>{'const student = {\\n  name: "Rachelle Raros",\\n  field: "Information Technology",\\n  focus: "Learning & Building",\\n  goal: "Become a capable programmer"\\n};'}</pre>
          <div className="sparkle">✦</div><div className="heart">♡</div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading"><p className="eyebrow">♡ get to know me</p><h2>About Me</h2></div>
        <div className="about-grid">
          <div className="card about-main"><div className="avatar">R</div><h3>Hi! I’m Rachelle.</h3>
            <p>I am an aspiring programmer who enjoys creativity, technology, and learning new things. I like exploring ideas, designing, and finding solutions to problems.</p>
            <p>My goal is to continue building my skills and become a better programmer through practice, projects, and experience.</p>
          </div>
          <div className="skills-grid">
            {["💻 Software Development","🌐 Website Design & Development","📡 Computer Networking","⚙️ Application Development","✨ Technology & Innovation"].map(x => <div className="card mini-card" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section id="education" className="section soft">
        <div className="section-heading"><p className="eyebrow">♡ my college journey</p><h2>Education</h2></div>
        <div className="education-card card"><div className="school-badge">NVSU</div><div>
          <p className="small-label">Nueva Vizcaya State University</p><h3>BS Information Technology</h3><p>3rd-Year College Student</p><p className="major">Major: Network Design Management (NDM)</p>
          <p>My studies allow me to explore programming, networking, database management, and system development while preparing for a career in Information Technology.</p>
        </div></div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading"><p className="eyebrow">♡ things I’m building</p><h2>Projects</h2></div>
        <div className="project-grid">{projects.map(([title,text,tags]) => <article className="card project-card" key={title}>
          <div className="project-icon">&lt;/&gt;</div><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
        <div className="focus-box"><span>✦</span><div><strong>Current Focus</strong><p>Practicing • Developing • Improving</p></div></div>
      </section>

      <section id="contact" className="section soft">
        <div className="section-heading"><p className="eyebrow">♡ let’s connect</p><h2>Contact</h2></div>
        <div className="contact-card card"><h3>Want to say hello?</h3><p>Feel free to reach out through any of my contact details below.</p>
          <div className="contact-list">
            <a href="mailto:rarosrachelle1106@gmail.com">✉️ rarosrachelle1106@gmail.com</a>
            <a href="tel:09358126709">📱 09358126709</a>
            <a href="https://instagram.com/kixxc.oo" target="_blank" rel="noreferrer">📸 @kixxc.oo</a>
          </div>
        </div>
      </section>
      <footer>Made with ♡ by Rachelle Raros • Information Technology Student</footer>
    </main>
  );
}
