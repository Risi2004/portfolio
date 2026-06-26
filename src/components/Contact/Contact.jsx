import { Mail, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="section-container">
        <div className="contact__card">
          <div className="contact__info">
            <h2 className="contact__title">
              Let&apos;s build something impactful together.
            </h2>
            <p className="contact__subtitle">
              Have a project in mind or want to collaborate? I&apos;d love to hear
              from you. Reach out and let&apos;s turn your ideas into reality.
            </p>

            <div className="contact__links">
              <a href="mailto:jegatheesan.risikesan@gmail.com" className="contact__link">
                <Mail size={18} />
                <span>jegatheesan.risikesan@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jegatheesan-risikesan-mernstack-react-nodejs-expressjs-mongodb-html-css-tailwindcss/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                <ExternalLink size={18} />
                <span>linkedin.com/in/jegatheesan-risikesan</span>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
