const projects = [
  {
    no: "01",
    type: "Accounting Technology",
    title: "Accounting Operations Portal",
    description:
      "A centralized operations platform for recurring processing, workflow routing, validations, monitoring, reporting, user controls, and structured day-to-day administration.",
    tags: ["Portal", "Workflow", "Automation", "PostgreSQL"],
    variant: "accounting",
  },
  {
    no: "02",
    type: "Professional Services",
    title: "Audit Firm Management Portal",
    description:
      "A business system for organizing client records, engagements, assignments, documents, activity monitoring, dashboards, and role-based access for an audit practice.",
    tags: ["Client Registry", "RBAC", "Documents", "Dashboard"],
    variant: "audit",
  },
  {
    no: "03",
    type: "Compliance Workflow",
    title: "BIR Registration Workflow Portal",
    description:
      "A structured portal concept for registration, document preparation, stage tracking, attachments, workflow monitoring, and administrative visibility across a multi-step compliance process.",
    tags: ["Next.js", "Supabase", "Workflow", "Documents"],
    variant: "registration",
  },
  {
    no: "04",
    type: "Workforce Technology",
    title: "Real-Time Payroll & Workforce System",
    description:
      "A payroll and workforce application concept focused on real-time calculations, employee records, attendance-linked processing, summaries, approvals, and management visibility.",
    tags: ["Payroll", "Real-Time Data", "Dashboard", "Automation"],
    variant: "payroll",
  },
  {
    no: "05",
    type: "Professional Services",
    title: "Law Firm Operations Portal",
    description:
      "A centralized workspace for client and matter records, task tracking, document organization, workflow stages, user roles, and administrative oversight.",
    tags: ["Case Records", "Tasks", "Documents", "RBAC"],
    variant: "legal",
  },
  {
    no: "06",
    type: "Automation Toolkit",
    title: "Google & Excel Business Applications",
    description:
      "A collection of web apps, automated workbooks, validation tools, reporting utilities, file-processing routines, and business automations built with Apps Script, Excel VBA, and related technologies.",
    tags: ["Apps Script", "Excel VBA", "Google Workspace", "Automation"],
    variant: "automation",
  },
];

const skills = [
  { icon:"python", label:"Python" },
  { icon:"javascript", label:"JavaScript" },
  { icon:"typescript", label:"TypeScript" },
  { icon:"react", label:"Next.js / React" },
  { icon:"database", label:"PostgreSQL / SQL" },
  { icon:"supabase", label:"Supabase" },
  { icon:"apps", label:"Google Apps Script" },
  { icon:"excel", label:"Excel VBA" },
  { icon:"api", label:"REST APIs" },
  { icon:"workflow", label:"Workflow & UX" },
];

function Arrow(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;}
function External(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v6H5V5h6"/></svg>;}

function SkillIcon({type}:{type:string}){
  const common={viewBox:"0 0 24 24","aria-hidden":true};
  if(type==="python") return <svg {...common}><path d="M8 3h5a3 3 0 0 1 3 3v4H8a3 3 0 0 0-3 3v2H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h4"/><path d="M16 21h-5a3 3 0 0 1-3-3v-4h8a3 3 0 0 0 3-3V9h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4"/><path d="M8 7h.01M16 17h.01"/></svg>;
  if(type==="javascript") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 8v7a2 2 0 0 1-2 2"/><path d="M13 16c.7.7 1.4 1 2.4 1 1.3 0 2.1-.7 2.1-1.6 0-2.4-4.2-1.2-4.2-4 0-1.3 1.1-2.4 2.9-2.4.9 0 1.7.2 2.4.8"/></svg>;
  if(type==="typescript") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 9h6M10 9v8"/><path d="M14 16c.7.7 1.4 1 2.4 1 1.3 0 2.1-.7 2.1-1.6 0-2.4-4.2-1.2-4.2-4 0-1.3 1.1-2.4 2.9-2.4.9 0 1.7.2 2.4.8"/></svg>;
  if(type==="react") return <svg {...common}><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></svg>;
  if(type==="database") return <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>;
  if(type==="supabase") return <svg {...common}><path d="M13 2 5 13h7l-1 9 8-11h-7z"/></svg>;
  if(type==="apps") return <svg {...common}><path d="M7 3h10l4 7-5 9H8l-5-9z"/><path d="m7 3 5 9 5-9M3 10h18M8 19l4-7 4 7"/></svg>;
  if(type==="excel") return <svg {...common}><path d="M4 5 14 3v18L4 19z"/><path d="M14 6h6v12h-6"/><path d="m7 9 4 6M11 9l-4 6"/></svg>;
  if(type==="api") return <svg {...common}><path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>;
  return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 9h4M7 13h7M16 9h1M16 13h1"/></svg>;
}

function DeveloperPanel(){
  return (
    <div className="developer-panel" aria-label="Animated development workflow illustration">
      <div className="terminal-head"><span className="dots"><i/><i/><i/></span><span>reinyg / build.ts</span></div>
      <div className="terminal-body">
        <p><b>01</b><span>understand</span><em>(process)</em><i>✓</i></p>
        <p><b>02</b><span>simplify</span><em>(workflow)</em><i>✓</i></p>
        <p><b>03</b><span>automate</span><em>(repetition)</em><i>✓</i></p>
        <p className="active"><b>04</b><span>build</span><em>(system)</em><i className="cursor">▍</i></p>
        <p><b>05</b><span>improve</span><em>(experience)</em><i>→</i></p>
      </div>
      <div className="terminal-status"><span><i/> workflow ready</span><span>v1.3</span></div>
    </div>
  );
}

function Prototype({variant}:{variant:string}){
  return (
    <div className={`prototype prototype-${variant}`} aria-label="Sanitized prototype preview">
      <div className="prototype-bar"><i/><i/><i/><span>Prototype Preview</span></div>
      <div className="prototype-shell">
        <aside>
          <strong>REINYG</strong>
          <span>Overview</span><span>Workflow</span><span>Records</span><span>Reports</span>
        </aside>
        <div className="prototype-main">
          <div className="prototype-top"><div><small>DASHBOARD</small><b>Operations Overview</b></div><span className="status-pill">Active</span></div>
          <div className="prototype-kpis"><div/><div/><div/></div>
          <div className="prototype-content">
            <div className="prototype-chart"><i/><i/><i/><i/><i/></div>
            <div className="prototype-list"><span/><span/><span/><span/></div>
          </div>
        </div>
      </div>
      <small className="prototype-note">Representative interface — no production data shown</small>
    </div>
  );
}

export default function Home(){
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="REINYG home">REINYG<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <a className="top-link" href="https://www.linkedin.com/in/reinniel-yalong-696978236/" target="_blank" rel="noreferrer">LinkedIn <External/></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <DeveloperPanel/>
          <div className="hero-copy">
            <p className="eyebrow">SYSTEMS • AUTOMATION • TECHNOLOGY</p>
            <h1>Reinniel Exciya Yalong</h1>
            <p className="hero-role">Systems Developer & Automation Specialist</p>
            <p className="hero-intro">I build practical digital systems that simplify workflows, automate repetitive work, and turn business requirements into working technology.</p>
            <div className="code-card" aria-label="Professional profile summary">
              <span className="brace">&#123;</span>
              <div><b>&quot;focus&quot;</b>: <em>&quot;business systems + automation&quot;</em>,</div>
              <div><b>&quot;build&quot;</b>: <em>&quot;web apps, portals, data tools&quot;</em>,</div>
              <div><b>&quot;approach&quot;</b>: <em>&quot;understand → simplify → automate&quot;</em></div>
              <span className="brace">&#125;</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#work">View my work <Arrow/></a>
              <a className="button ghost" href="https://github.com/ReinYG" target="_blank" rel="noreferrer">GitHub <External/></a>
              <a className="button ghost" href="https://www.linkedin.com/in/reinniel-yalong-696978236/" target="_blank" rel="noreferrer">LinkedIn <External/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-title-row">
          <div><span className="kicker">SOFTWARE PORTFOLIO</span><h2>Systems I&apos;ve Developed</h2></div>
          <p>Each preview is a sanitized prototype created for this public portfolio. It represents the type of system and experience I built without revealing internal screens, private data, clients, or confidential processes.</p>
        </div>

        <div className="project-grid">
          {projects.map((item)=>(
            <article className="project-card" key={item.no}>
              <Prototype variant={item.variant}/>
              <div className="project-copy">
                <span className="work-no">{item.no} / {item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-heading">
          <div><span className="kicker">ABOUT</span><h2>Business understanding. Technical execution.</h2></div><span className="purple-rule"/>
        </div>

        <div className="about-profile">
          <div className="about-photo-card">
            <img src="/profile/reinyg-profile.jpg" alt="Reinniel Exciya Yalong"/>
            <div><strong>Reinniel Yalong</strong><span>Systems & Automation Developer</span></div>
          </div>
          <div className="about-columns">
            <p>My professional foundation is in <strong>accounting and banking operations</strong>, where I developed a strong appreciation for accuracy, controls, structured processes, and reliable information.</p>
            <p>I later expanded into <strong>programming and automation</strong>, building portals, workflow applications, dashboards, validation tools, spreadsheet systems, integrations, and database-backed applications around real operational needs.</p>
            <p>I also work extensively with <strong>Infosys Finacle 10.x and 11.x</strong>. I keep implementation details private, while the experience strengthens my understanding of enterprise workflows, UAT, user support, transaction controls, and process design.</p>
          </div>
        </div>

        <div className="principles">
          <div><span>01</span><strong>Understand</strong><p>Study users, rules, pain points, and exceptions.</p></div>
          <div><span>02</span><strong>Simplify</strong><p>Remove unnecessary steps before automating anything.</p></div>
          <div><span>03</span><strong>Build</strong><p>Choose the right-sized technology for the problem.</p></div>
          <div><span>04</span><strong>Improve</strong><p>Test, learn from users, and keep refining.</p></div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-title-row">
          <div><span className="kicker">TOOLKIT</span><h2>Skills & Technologies</h2></div>
          <p>A practical stack for web applications, automation, spreadsheet engineering, databases, integrations, enterprise systems, and workflow-oriented development.</p>
        </div>
        <div className="skill-grid">{skills.map((skill)=><div className="skill-card" key={skill.label}><span className="skill-icon"><SkillIcon type={skill.icon}/></span><strong>{skill.label}</strong></div>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div><span className="contact-kicker">LET&apos;S CONNECT</span><h2>Have a process that should work better?</h2><p>I&apos;m open to future technology roles, systems-development opportunities, automation projects, and selected client work.</p></div>
          <div className="contact-actions">
            <a className="contact-button light" href="https://www.linkedin.com/in/reinniel-yalong-696978236/" target="_blank" rel="noreferrer">LinkedIn <External/></a>
            <a className="contact-button outline" href="https://github.com/ReinYG" target="_blank" rel="noreferrer">GitHub <External/></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">REINYG<span>.</span></a>
        <p>Systems • Automation • Technology</p>
        <p>© {new Date().getFullYear()} Reinniel Exciya Yalong</p>
      </footer>
    </main>
  );
}