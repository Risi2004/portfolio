import { useState } from 'react';
import { projectsGallery, projectFilters } from '../../data/projectsGallery';
import ProjectsPageHeader from '../../components/ProjectsGallery/ProjectsPageHeader';
import FilterBar from '../../components/ProjectsGallery/FilterBar';
import GalleryProjectCard from '../../components/ProjectsGallery/GalleryProjectCard';
import Footer from '../../components/Footer/Footer';
import './ProjectsPage.css';

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projectsGallery
      : projectsGallery.filter((p) => p.category === activeFilter);

  return (
    <>
      <main className="projects-page">
        <div className="section-container">
          <ProjectsPageHeader total={projectsGallery.length} />
          <FilterBar
            filters={projectFilters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <div className="projects-page__grid">
            {filteredProjects.map((project) => (
              <GalleryProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage;
