import { Layers, Cloud, Brain } from 'lucide-react';
import { bioParagraphs, features } from '../../data/about';
import FeatureCard from './FeatureCard';
import './About.css';

const iconMap = { Layers, Cloud, Brain };

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="section-container">
        <div className="about__grid">
          <div className="about__content">
            <h2 className="about__title">About Me</h2>
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about__features">
            {features.map(({ icon, title, description }) => {
              const Icon = iconMap[icon];
              return (
                <FeatureCard
                  key={title}
                  icon={<Icon size={22} />}
                  title={title}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
