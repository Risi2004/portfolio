import './Footer.css';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jegatheesan-risikesan-mernstack-react-nodejs-expressjs-mongodb-html-css-tailwindcss/' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container footer__inner">
        <div className="footer__left">
          <p className="footer__name">Jegatheesan Risikesan</p>
          <p className="footer__copyright">
            &copy; {year} All rights reserved.
          </p>
        </div>

        <div className="footer__social">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
