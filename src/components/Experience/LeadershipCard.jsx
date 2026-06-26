import { Users, GitBranch } from 'lucide-react';
import './LeadershipCard.css';

const iconMap = { Users, GitBranch };

function LeadershipCard({ icon, title, description }) {
  const Icon = iconMap[icon];

  return (
    <article className="leadership-card">
      <span className="leadership-card__icon">
        <Icon size={18} />
      </span>
      <div>
        <h4 className="leadership-card__title">{title}</h4>
        <p className="leadership-card__description">{description}</p>
      </div>
    </article>
  );
}

export default LeadershipCard;
