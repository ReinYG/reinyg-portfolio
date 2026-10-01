const projects = [
  {
    number: "01",
    category: "Business Systems",
    title: "Centralized Processing Portal",
    description:
      "A department-scale web platform designed to organize recurring requests, workflows, monitoring, approvals, reporting, and operational controls in one environment.",
    tags: ["Web App", "Workflow", "PostgreSQL", "Automation"],
  },
  {
    number: "02",
    category: "Professional Services",
    title: "Audit & Law Firm Portals",
    description:
      "Portal concepts and working systems for professional-service operations, including client records, engagements or matters, document organization, task monitoring, role-based access, and administrative dashboards.",
    tags: ["Systems Design", "Database", "RBAC", "Dashboards"],
  },
  {
    number: "03",
    category: "Google Workspace",
    title: "Google Web Applications",
    description:
      "Browser-based tools powered by Google Apps Script for submissions, validations, notifications, Drive integration, reporting, data consolidation, and everyday business automation.",
    tags: ["Apps Script", "Sheets", "Drive", "JavaScript"],
  },
  {
    number: "04",
    category: "Spreadsheet Engineering",
    title: "Excel Automation Systems",
    description:
      "Advanced workbook solutions that behave like lightweight applications—using VBA, formulas, validation logic, imports and exports, file generation, protection, dashboards, and repeatable processing routines.",
    tags: ["Excel", "VBA", "Data", "Automation"],
  },
  {
    number: "05",
    category: "Application Development",
    title: "Personal & Utility Applications",
    description:
      "Practical applications designed from real user needs, including shared budgeting, monitoring, notifications, structured data entry, dashboards, and synchronized data experiences.",
    tags: ["Next.js", "Supabase", "UX", "Mobile-first"],
  },
];

const expertise = [
  {
    title: "Process Automation",
    text: "I turn repetitive, manual, and spreadsheet-heavy work into structured digital workflows with validations, controls, notifications, and reporting.",
  },
  {
    title: "Systems Development",
    text: "I design and build practical internal tools, portals, dashboards, databases, and web applications around real operational requirements.",
  },
  {
    title: "Spreadsheet Engineering",
    text: "I build advanced Excel and Google Sheets solutions using VBA, Apps Script, formulas, data transformation, dashboards, and automation logic.",
  },
  {
    title: "Business Analysis",
    text: "I study the process first—users, rules, exceptions, controls, and bottlenecks—then translate those needs into a technical solution.",
  },
];

const stack = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "SQL",
  "PostgreSQL",
  "Supabase",
  "Google Apps Script",
  "Excel VBA",
  "HTML / CSS",
  "Git / GitHub",
  "Google Workspace",
  "Microsoft Excel",
  "REST APIs",
  "Process Mapping",
];

const opportunities = [
  {
    label: "FOR COMPANIES",
    title: "Technology & systems roles",
    text: "Systems development, business analysis, process automation, internal tools, UAT, enterprise workflows, reporting, and digital transformation.",
  },
  {
    label: "FOR CLIENTS",
    title: "Practical automation projects",
    text: "Web portals, dashboards, Google Workspace applications, Excel/VBA solutions, workflow automation, data validation, and custom internal tools.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-9 9" />
      <path d="M19 13v6H5V5h6" />
    </svg>
  );
}

function CodeMark() {
  return (
    <svg className="code-mark" viewBox="0 0 120 120" aria-hidden="true">
      <path d="M42 30 18 60l24 30" />
      <path d="m78 30 24 30-24 30" />
      <path d="m68 22-16 76" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="REINYG home">
          <span className="brand-mark">R</span>
          <span>REINYG</span>
          <span className="brand-dot">.dev</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-cta"
          href="https://www.linkedin.com/in/reinniel-yalong-696978236/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Systems • Automation • Technology
          </div>
          <h1>
            I build systems that make <span>work simpler.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m <strong>Reinniel Exciya Yalong</strong>—a systems developer and
            automation specialist with a professional foundation in accounting,
            banking operations, process improvement, and enterprise technology.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/reinniel-yalong-696978236/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalIcon />
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">FOCUS</span>
              <strong>Business × Automation × Technology</strong>
            </div>
            <div>
              <span className="meta-label">STATUS</span>
              <strong>Open to future roles & selected projects</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="visual-card main-card">
            <div className="terminal-top">
              <div className="terminal-dots"><i /><i /><i /></div>
              <span>reinyg / workflow</span>
            </div>
            <CodeMark />
            <div className="code-lines">
              <span><b>01</b> understand(process)</span>
              <span><b>02</b> simplify(workflow)</span>
              <span><b>03</b> automate(repetition)</span>
              <span><b>04</b> build(system)</span>
              <span><b>05</b> improve(experience)</span>
            </div>
          </div>
          <div className="floating-card float-one">
            <span>AUTOMATION</span>
            <strong>Less repetitive work.</strong>
          </div>
          <div className="floating-card float-two">
            <span>SYSTEM DESIGN</span>
            <strong>Built around the process.</strong>
          </div>
        </div>
      </section>

      <section className="section intro-strip">
        <p>
          I combine business understanding with hands-on development to turn
          repetitive work and disconnected tools into structured digital systems.
        </p>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <span className="section-no">01 / ABOUT</span>
          <h2>Business understanding.<br />Technical execution.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="large-copy">
              My career developed from <strong>accounting and banking operations</strong>
              into process automation, systems design, programming, and digital
              workflow development.
            </p>
            <p>
              That background shapes how I build. I understand that a useful system
              is more than a good interface or working code. It also needs clear rules,
              reliable data, practical controls, understandable workflows, and a good
              experience for the people who use it every day.
            </p>
            <p>
              I&apos;m particularly interested in projects where technology can replace
              repeated manual work, reduce errors, improve visibility, and organize a
              process that has outgrown spreadsheets or disconnected tools.
            </p>
          </div>
          <aside className="profile-card">
            <div className="monogram">RY</div>
            <div>
              <span className="meta-label">PROFESSIONAL PROFILE</span>
              <h3>Systems & Automation Developer</h3>
            </div>
            <div className="profile-row"><span>Background</span><strong>Accounting & Banking</strong></div>
            <div className="profile-row"><span>Specialty</span><strong>Automation & Systems</strong></div>
            <div className="profile-row"><span>Enterprise Tech</span><strong>Finacle 10.x / 11.x</strong></div>
            <div className="profile-row"><span>Approach</span><strong>Process-first</strong></div>
            <div className="profile-links">
              <a href="https://www.linkedin.com/in/reinniel-yalong-696978236/" target="_blank" rel="noreferrer">
                LinkedIn <ExternalIcon />
              </a>
              <a href="https://github.com/ReinYG" target="_blank" rel="noreferrer">
                GitHub <ExternalIcon />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section projects" id="work">
        <div className="section-heading split-heading">
          <div>
            <span className="section-no">02 / SELECTED WORK</span>
            <h2>What I&apos;ve been building.</h2>
          </div>
          <p>
            Public descriptions are intentionally generalized and sanitized. The
            focus is on my technical contribution, systems thinking, and automation
            capabilities—not confidential business information.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="project-arrow"><ArrowIcon /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-heading">
          <span className="section-no">03 / EXPERTISE</span>
          <h2>From problem to working system.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article key={item.title}>
              <span className="expertise-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section finacle-section">
        <div className="finacle-copy">
          <span className="section-no light">ENTERPRISE SYSTEM EXPERIENCE</span>
          <h2>Finacle banking technology experience.</h2>
          <p>
            I have extensive hands-on experience with <strong>Infosys Finacle</strong>,
            including operational workflows, user support, process analysis, testing,
            UAT, and the relationship between business procedures and enterprise-system
            controls.
          </p>
          <p>
            This experience strengthens my systems work with a practical understanding
            of controlled transactions, role separation, structured workflows, and
            large-scale business applications.
          </p>
        </div>
        <div className="finacle-badge">
          <span>ENTERPRISE</span>
          <strong>Finacle</strong>
          <small>10.x / 11.x</small>
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading split-heading">
          <div>
            <span className="section-no">04 / TOOLKIT</span>
            <h2>Technology I work with.</h2>
          </div>
          <p>
            I choose tools based on the problem—from spreadsheets and scripting to
            full web applications and relational databases.
          </p>
        </div>
        <div className="stack-grid">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section opportunity-section">
        <div className="section-heading">
          <span className="section-no">05 / OPPORTUNITIES</span>
          <h2>Where I can contribute.</h2>
        </div>
        <div className="opportunity-grid">
          {opportunities.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-section">
        <div className="section-heading">
          <span className="section-no">06 / METHOD</span>
          <h2>My build process.</h2>
        </div>
        <div className="method-line">
          {[
            ["01", "Understand", "Users, rules, problems & constraints"],
            ["02", "Simplify", "Remove unnecessary steps"],
            ["03", "Design", "Workflow, data, controls & UX"],
            ["04", "Build", "Develop the right-sized solution"],
            ["05", "Improve", "Test, learn & refine"],
          ].map(([no, title, text]) => (
            <div className="method-step" key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <span className="section-no light">LET&apos;S CONNECT</span>
          <h2>Looking for someone who can bridge business and technology?</h2>
          <p>
            I&apos;m open to future technology roles, systems-development opportunities,
            automation projects, and selected client work.
          </p>
          <div className="contact-links">
            <a
              className="contact-link primary-contact"
              href="https://www.linkedin.com/in/reinniel-yalong-696978236/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>PROFESSIONAL PROFILE</small>
                LinkedIn
              </span>
              <ExternalIcon />
            </a>
            <a
              className="contact-link"
              href="https://github.com/ReinYG"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>CODE & PROJECTS</small>
                GitHub
              </span>
              <ExternalIcon />
            </a>
          </div>
          <p className="privacy-note">
            Public portfolio content is intentionally sanitized and does not expose
            confidential operational data, credentials, or proprietary business information.
          </p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">R</span>
          <span>REINYG</span>
          <span className="brand-dot">.dev</span>
        </a>
        <p>Systems • Automation • Technology</p>
        <p>© {new Date().getFullYear()} Reinniel Exciya Yalong</p>
      </footer>
    </main>
  );
}
