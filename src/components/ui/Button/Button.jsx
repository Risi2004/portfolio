import './Button.css';

function Button({ variant = 'primary', href, onClick, children, className = '', type = 'button' }) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
