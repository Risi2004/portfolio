import { Calendar, Star } from 'lucide-react';
import './EducationCard.css';

function EducationCard({ degree, institution, classYear, gpa, coursework }) {
  return (
    <div className="education-card">
      <h4 className="education-card__degree">{degree}</h4>
      <p className="education-card__institution">{institution}</p>

      <div className="education-card__meta">
        <span className="education-card__meta-item">
          <Calendar size={14} />
          {classYear}
        </span>
        <span className="education-card__meta-item">
          <Star size={14} />
          {gpa}
        </span>
      </div>

      <div className="education-card__coursework">
        <h5 className="education-card__coursework-title">Relevant Coursework</h5>
        <ul className="education-card__coursework-list">
          {coursework.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EducationCard;
