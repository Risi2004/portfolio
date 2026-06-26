import { Cloud, CloudCog, Container, Monitor, ExternalLink } from 'lucide-react';
import './CertificationCard.css';

const iconMap = { Cloud, CloudCog, Container, Monitor };

function CertificationCard({ name, issuer, level, credentialId, color, icon, link }) {
  const Icon = iconMap[icon];

  return (
    <a href={link} className="certification-card" target="_blank" rel="noopener noreferrer">
      <div className="certification-card__banner" style={{ backgroundColor: color }}>
        <Icon size={28} color="#fff" />
        <span className="certification-card__credential">Credential ID</span>
      </div>
      <div className="certification-card__body">
        <h4 className="certification-card__name">{name}</h4>
        <p className="certification-card__issuer">{issuer}</p>
        <p className="certification-card__level">{level}</p>
        <span className="certification-card__id">{credentialId}</span>
        <ExternalLink size={14} className="certification-card__link-icon" />
      </div>
    </a>
  );
}

export default CertificationCard;
