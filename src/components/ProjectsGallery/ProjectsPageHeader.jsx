import './ProjectsPageHeader.css';

function ProjectsPageHeader({ total }) {
  return (
    <header className="projects-page-header">
      <div className="projects-page-header__text">
        <h1 className="projects-page-header__title">Projects</h1>
        <p className="projects-page-header__subtitle">
          A curated gallery of engineering feats, from distributed systems to
          generative neural architectures.
        </p>
      </div>
      <span className="projects-page-header__badge">
        <span className="projects-page-header__badge-dot" />
        {total} Total Works
      </span>
    </header>
  );
}

export default ProjectsPageHeader;
