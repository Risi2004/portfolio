import HeroSection from '../../components/HeroSection/HeroSection'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
  );
}

export default Home