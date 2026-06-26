import HeroSection from '../../components/HeroSection/HeroSection'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home
