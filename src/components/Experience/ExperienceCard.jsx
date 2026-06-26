import { Code2, Bug } from 'lucide-react';
import Tag from '../ui/Tag/Tag';
import './ExperienceCard.css';

const iconMap = { Code2, Bug };

function ExperienceCard({ icon, role, company, period, description, tags }) {
  const Icon = iconMap[icon];

  return (
    <article className="experience-card">
      <div className="experience-card__header">
        <div className="experience-card__role">
          <span className="experience-card__icon">
            <Icon size={18} />
          </span>
          <div>
            <h4 className="experience-card__title">{role}</h4>
            <span className="experience-card__company">{company}</span>
          </div>
        </div>
        <span className="experience-card__period">{period}</span>
      </div>
      <p className="experience-card__description">{description}</p>
      <div className="experience-card__tags">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
