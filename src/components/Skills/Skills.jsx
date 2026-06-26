import { Monitor, Server, Cpu, Cloud } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading/SectionHeading';
import SkillCard from './SkillCard';
import './Skills.css';

const iconMap = { Monitor, Server, Cpu, Cloud };

function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="section-container">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="Technologies and tools I use to bring ideas to life."
          align="center"
        />

        <div className="skills__grid">
          {skillCategories.map(({ icon, title, skills }) => {
            const Icon = iconMap[icon];
            return (
              <SkillCard
                key={title}
                icon={<Icon size={20} />}
                title={title}
                skills={skills}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
