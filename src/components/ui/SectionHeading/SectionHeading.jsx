import './SectionHeading.css';

function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
