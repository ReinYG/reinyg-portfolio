import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectCaseStudies } from "../data";
import PortfolioPrototype from "../../components/PortfolioPrototype";

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
          <PortfolioPrototype variant={project.variant} screen={1}/>
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
            <PortfolioPrototype variant={project.variant} screen={1}/>
            <PortfolioPrototype variant={project.variant} screen={2}/>
            <PortfolioPrototype variant={project.variant} screen={3}/>
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
