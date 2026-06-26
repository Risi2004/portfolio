import {
  Share2,
  Recycle,
  Cloud,
  Monitor,
  Cpu,
  Zap,
  Link,
  Shield,
  Server,
  Database,
  HeartPulse,
  Sun,
  TrendingUp,
  Building2,
  Palette,
  ArrowUpRight,
} from 'lucide-react';
import Tag from '../ui/Tag/Tag';
import './GalleryProjectCard.css';

const iconMap = {
  Share2,
  Recycle,
  Cloud,
  Monitor,
  Cpu,
  Zap,
  Link,
  Shield,
  Server,
  Database,
  HeartPulse,
  Sun,
  TrendingUp,
  Building2,
  Palette,
};

function GalleryProjectCard({ title, description, tags, icon, image, caseStudy, liveDemo }) {
  const Icon = iconMap[icon];

  return (
    <article className="gallery-card">
      <div className="gallery-card__image-wrapper">
        <img src={image} alt={title} className="gallery-card__image" />
      </div>

      <div className="gallery-card__body">
        <div className="gallery-card__title-row">
          <h3 className="gallery-card__title">{title}</h3>
          {Icon && (
            <span className="gallery-card__icon">
              <Icon size={16} />
            </span>
          )}
        </div>

        <p className="gallery-card__description">{description}</p>

        <div className="gallery-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="gallery-card__links">
          <a href={caseStudy} className="gallery-card__link">
            Case Study <ArrowUpRight size={14} />
          </a>
          <a href={liveDemo} className="gallery-card__link">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default GalleryProjectCard;
