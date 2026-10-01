const work = [
  { no:"01", type:"Business Systems", title:"Centralized Processing Portal", description:"A department-scale portal that brings recurring requests, workflow routing, validation, status monitoring, reporting, and operational controls into one organized workspace.", tags:["Web Application","Workflow","Automation","Database"] },
  { no:"02", type:"Professional Services", title:"Audit & Law Firm Portals", description:"Structured portals for client and matter records, documents, task monitoring, user roles, dashboards, and administrative workflows for professional-service teams.", tags:["Systems Design","RBAC","Dashboards","Records"] },
  { no:"03", type:"Google Workspace", title:"Google Web Applications", description:"Browser-based business tools powered by Google Apps Script for submissions, validations, email automation, Drive integration, reporting, and data consolidation.", tags:["Apps Script","Sheets","Drive","JavaScript"] },
  { no:"04", type:"Spreadsheet Engineering", title:"Excel Automation Systems", description:"Advanced Excel solutions that behave like lightweight business applications using VBA, structured formulas, controls, dashboards, file generation, and repeatable processing logic.", tags:["Excel","VBA","Automation","Reporting"] },
];

const skills = [
  ["PY","Python"],["JS","JavaScript"],["TS","TypeScript"],["NX","Next.js / React"],
  ["DB","PostgreSQL / SQL"],["SB","Supabase"],["GS","Google Apps Script"],
  ["XL","Excel VBA"],["API","REST APIs"],["UX","Workflow & UX"],
];

function Arrow(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;}
function External(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v6H5V5h6"/></svg>;}

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
          <div className="hero-photo-wrap">
            <img className="hero-photo" src="/profile/reinyg-profile.jpg" alt="Professional portrait of Reinniel Exciya Yalong"/>
            <div className="availability"><i/> Open to future roles & selected projects</div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">SYSTEMS • AUTOMATION • TECHNOLOGY</p>
            <h1>Reinniel Exciya Yalong</h1>
            <p className="hero-role">Systems Developer & Automation Specialist</p>
            <p className="hero-intro">I combine business understanding with programming and automation to build practical digital systems that make everyday work simpler, clearer, and more efficient.</p>
            <div className="code-card" aria-label="Professional profile summary">
              <span className="brace">&#123;</span>
              <div><b>&quot;focus&quot;</b>: <em>&quot;business systems + automation&quot;</em>,</div>
              <div><b>&quot;build&quot;</b>: <em>&quot;web apps, workflows, data tools&quot;</em>,</div>
              <div><b>&quot;approach&quot;</b>: <em>&quot;understand → simplify → automate&quot;</em></div>
              <span className="brace">&#125;</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#work">View my work <Arrow/></a>
              <a className="button ghost" href="https://github.com/ReinYG" target="_blank" rel="noreferrer">GitHub <External/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-title-row">
          <div><span className="kicker">PORTFOLIO</span><h2>Selected Work</h2></div>
          <p>Public descriptions are intentionally generalized. They show the kind of systems I build without exposing confidential business data or internal operational details.</p>
        </div>
        <div className="work-list">
          {work.map((item,index)=>(
            <article className={`work-row ${index%2===1?"reverse":""}`} key={item.no}>
              <div className="work-copy">
                <span className="work-no">{item.no} / {item.type}</span>
                <h3>{item.title}</h3><p>{item.description}</p>
                <div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="mock-window" aria-hidden="true">
                <div className="mock-bar"><i/><i/><i/><span>reinyg / {item.no}</span></div>
                <div className="mock-body">
                  <div className="mock-side"><strong>REINYG</strong><span>Dashboard</span><span>Workflow</span><span>Reports</span></div>
                  <div className="mock-main"><div className="mock-heading"/><div className="mock-grid"><div/><div/><div/></div><div className="mock-table"><i/><i/><i/><i/></div></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-heading">
          <div><span className="kicker">ABOUT</span><h2>About Me</h2></div><span className="purple-rule"/>
        </div>
        <div className="about-columns">
          <p>My professional foundation is in <strong>accounting and banking operations</strong>, where I learned the importance of accuracy, controls, structured processes, and reliable data. That experience eventually led me into programming, automation, and systems development.</p>
          <p>I build technology around <strong>real operational problems</strong>. My work includes internal portals, workflow applications, dashboards, spreadsheet automation, validation tools, database-backed systems, and integrations that reduce repetitive work.</p>
          <p>I also work extensively with <strong>Infosys Finacle 10.x and 11.x</strong>. I keep banking-specific implementation details private, but the experience gives me a strong understanding of enterprise workflows, testing, controlled transactions, and user-centered process design.</p>
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
          <p>A practical stack for web applications, automation, spreadsheet engineering, databases, integrations, and workflow-oriented systems.</p>
        </div>
        <div className="skill-grid">{skills.map(([icon,label])=><div className="skill-card" key={label}><span className="skill-icon">{icon}</span><strong>{label}</strong></div>)}</div>
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