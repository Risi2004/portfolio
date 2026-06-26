import './SkillCard.css';

function SkillCard({ icon, title, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon">{icon}</span>
        <h3 className="skill-card__title">{title}</h3>
      </div>
      <ul className="skill-card__list">
        {skills.map((skill) => (
          <li key={skill} className="skill-card__item">
            <span className="skill-card__bullet" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
