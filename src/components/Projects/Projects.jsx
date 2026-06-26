import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      <div className="section-container">
        <SectionHeading
          title="Selected Works"
          subtitle="A curated collection of research-driven engineering projects."
        />

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="projects__view-all">
          <Link to="/projects" className="projects__view-all-link">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
