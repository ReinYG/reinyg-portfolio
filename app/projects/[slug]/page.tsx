import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectCaseStudies } from "../data";

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

function Arrow(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
}

function PrototypeScreen({ variant, screen }: { variant: string; screen: number }) {
  const titles = ["Dashboard", "Workflow", "Records"];
  return (
    <div className={`case-screen prototype-${variant}`}>
      <div className="case-screen-bar"><i/><i/><i/><span>{titles[screen - 1]}</span></div>
      <div className="case-screen-shell">
        <aside><strong>REINYG</strong><span>Overview</span><span>Workflow</span><span>Records</span><span>Reports</span></aside>
        <div className="case-screen-main">
          <div className="case-screen-title"><div><small>PROTOTYPE</small><b>{titles[screen - 1]}</b></div><span>Demo</span></div>
          {screen === 1 && <><div className="case-kpis"><div/><div/><div/></div><div className="case-chart"><i/><i/><i/><i/><i/><i/></div></>}
          {screen === 2 && <div className="case-flow"><div><b>01</b><span>Submitted</span></div><em/><div><b>02</b><span>Review</span></div><em/><div><b>03</b><span>Process</span></div><em/><div><b>04</b><span>Complete</span></div></div>}
          {screen === 3 && <div className="case-table"><span/><span/><span/><span/><span/><span/></div>}
        </div>
      </div>
    </div>
  );
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projectCaseStudies.findIndex((item) => item.slug === slug);
  const nextProject = projectCaseStudies[(currentIndex + 1) % projectCaseStudies.length];

  return (
    <main className="case-page">
      <header className="case-nav">
        <Link className="wordmark" href="/">REINYG<span>.</span></Link>
        <Link className="case-back" href="/#work">← Back to portfolio</Link>
      </header>

      <section className="case-hero">
        <div className="case-hero-inner">
          <div>
            <span className="case-label">{project.no} / {project.type}</span>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-tech-row">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
          </div>
          <PrototypeScreen variant={project.variant} screen={1}/>
        </div>
      </section>

      <section className="case-content">
        <div className="case-story">
          <article>
            <span className="case-section-no">01</span>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span className="case-section-no">02</span>
            <h2>What I Built</h2>
            <p>{project.built}</p>
          </article>
          <article>
            <span className="case-section-no">03</span>
            <h2>My Role</h2>
            <p>{project.role}</p>
          </article>
        </div>

        <div className="case-split">
          <section className="case-card">
            <span className="case-section-no">04</span>
            <h2>Technologies</h2>
            <div className="case-tech-list">{project.technologies.map((tech)=><span key={tech}>{tech}</span>)}</div>
          </section>

          <section className="case-card">
            <span className="case-section-no">05</span>
            <h2>Key Features</h2>
            <ul>{project.features.map((feature)=><li key={feature}>{feature}</li>)}</ul>
          </section>
        </div>

        <section className="case-outcomes">
          <div><span className="case-section-no">06</span><h2>What the system improves</h2></div>
          <div className="case-outcome-grid">{project.outcomes.map((outcome,index)=><div key={outcome}><span>0{index+1}</span><p>{outcome}</p></div>)}</div>
        </section>

        <section className="case-prototypes">
          <div className="case-prototype-head">
            <div><span className="case-section-no">07</span><h2>Prototype Screens</h2></div>
            <p>Original portfolio mockups only. They communicate the product direction without reproducing production screens, real records, credentials, or confidential workflows.</p>
          </div>
          <div className="case-screen-grid">
            <PrototypeScreen variant={project.variant} screen={1}/>
            <PrototypeScreen variant={project.variant} screen={2}/>
            <PrototypeScreen variant={project.variant} screen={3}/>
          </div>
        </section>

        <section className="case-next">
          <span>NEXT CASE STUDY</span>
          <Link href={`/projects/${nextProject.slug}`}>
            <strong>{nextProject.title}</strong><Arrow/>
          </Link>
        </section>
      </section>

      <footer className="case-footer">
        <Link className="wordmark footer-mark" href="/">REINYG<span>.</span></Link>
        <p>Sanitized public portfolio case study</p>
        <p>© {new Date().getFullYear()} Reinniel Exciya Yalong</p>
      </footer>
    </main>
  );
}
