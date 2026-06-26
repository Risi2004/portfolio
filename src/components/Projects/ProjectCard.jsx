import { ArrowUpRight } from 'lucide-react';
import Tag from '../ui/Tag/Tag';
import './ProjectCard.css';

function ProjectCard({ category, title, description, tags, image, reverse, link }) {
  return (
    <article className={`project-card ${reverse ? 'project-card--reverse' : ''}`}>
      <div className="project-card__image-wrapper">
        <img src={image} alt={title} className="project-card__image" />
      </div>

      <div className="project-card__content">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <a href={link} className="project-card__link">
          Project Deep-dive <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
