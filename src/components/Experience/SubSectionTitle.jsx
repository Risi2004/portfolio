import './SubSectionTitle.css';

function SubSectionTitle({ icon: Icon, title }) {
  return (
    <h3 className="subsection-title">
      <Icon size={18} className="subsection-title__icon" />
      {title}
    </h3>
  );
}

export default SubSectionTitle;
