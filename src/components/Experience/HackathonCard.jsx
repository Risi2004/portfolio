import { Trophy, Globe, Lightbulb } from 'lucide-react';
import './HackathonCard.css';

const iconMap = { Trophy, Globe, Lightbulb };

function HackathonCard({ badge, icon, title, description, tech }) {
  const Icon = iconMap[icon];

  return (
    <article className="hackathon-card">
      <div className="hackathon-card__top">
        <span className="hackathon-card__badge">{badge}</span>
        <span className="hackathon-card__icon">
          <Icon size={18} />
        </span>
      </div>
      <h4 className="hackathon-card__title">{title}</h4>
      <p className="hackathon-card__description">{description}</p>
      <p className="hackathon-card__tech">
        <span className="hackathon-card__tech-dot" />
        Tech: {tech}
      </p>
    </article>
  );
}

export default HackathonCard;
