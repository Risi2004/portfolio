import { ArrowRight } from 'lucide-react';
import portrait from '../../assets/images/image.jpg';
import Button from '../ui/Button/Button';
import StatsBar from './StatsBar';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="section-container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">I&apos;M JEGATHEESAN RISIKESAN</p>
            <h1 className="hero__title">
              Building Scalable{' '}
              <span className="gradient-text">Full Stack &amp; AI Systems</span>{' '}
              Solutions.
            </h1>
            <p className="hero__description">
              Full Stack Developer and AI Systems Engineer crafting high-performance
              applications — from elegant React frontends to scalable cloud backends
              and intelligent ML pipelines.
            </p>
            <div className="hero__actions">
              <Button href="/#projects">View Projects</Button>
              <Button variant="ghost" href="/#contact">
                Get in touch <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="hero__image-wrapper">
            <img
              src={portrait}
              alt="Jegatheesan Risikesan"
              className="hero__image"
            />
          </div>
        </div>

        <StatsBar />
      </div>
    </section>
  );
}

export default HeroSection;
