import Button from '../ui/Button/Button';
import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@email.com" />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue="">
          <option value="" disabled>Select a subject</option>
          <option value="project">Project Inquiry</option>
          <option value="collaboration">Collaboration</option>
          <option value="freelance">Freelance Work</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
        />
      </div>

      <Button variant="secondary" className="btn--full" type="submit">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
