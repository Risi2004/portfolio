import {
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  Shield,
  FileText,
} from 'lucide-react';
import {
  experienceHeader,
  professionalTenure,
  education,
  hackathons,
  leadership,
  certifications,
} from '../../data/experience';
import SubSectionTitle from './SubSectionTitle';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import HackathonCard from './HackathonCard';
import LeadershipCard from './LeadershipCard';
import CertificationCard from './CertificationCard';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience section-padding">
      <div className="section-container">
        <header className="experience__header">
          <span className="experience__badge">
            <FileText size={14} />
            {experienceHeader.badge}
          </span>
          <h2 className="experience__title">
            {experienceHeader.title}{' '}
            <span className="gradient-text">{experienceHeader.titleHighlight}</span>
          </h2>
          <p className="experience__subtitle">{experienceHeader.subtitle}</p>
        </header>

        <div className="experience__tenure-edu">
          <div className="experience__block">
            <SubSectionTitle icon={Briefcase} title="Professional Tenure" />
            <div className="experience__tenure-list">
              {professionalTenure.map((item) => (
                <ExperienceCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className="experience__block experience__block--education">
            <SubSectionTitle icon={GraduationCap} title="Education" />
            <EducationCard {...education} />
          </div>
        </div>

        <div className="experience__block">
          <SubSectionTitle icon={Trophy} title="Hackathons & Challenges" />
          <div className="experience__hackathons">
            {hackathons.map((item) => (
              <HackathonCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="experience__leadership-certs">
          <div className="experience__block">
            <SubSectionTitle icon={Users} title="Leadership" />
            <div className="experience__leadership-list">
              {leadership.map((item) => (
                <LeadershipCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className="experience__block experience__block--certs">
            <SubSectionTitle icon={Shield} title="Certifications & Awards" />
            <div className="experience__certs-grid">
              {certifications.map((item) => (
                <CertificationCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
