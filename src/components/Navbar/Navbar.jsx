import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const { pathname } = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (pathname !== '/') {
            setActiveSection('projects');
            return;
        }

        const sections = ['home', 'about', 'projects', 'skills', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, [pathname]);

    const logo = "</JR>";

    return (
        <nav className="navbar">
            <div className="navbar__section1">
                <Link to="/">
                    <h2>{logo}</h2>
                </Link>

            </div>
            <div className='navbar__section2'>
                <Link to="/" className={pathname === '/' && activeSection === 'home' ? 'active' : ''}>Home</Link>
                <Link to="/#about" className={pathname === '/' && activeSection === 'about' ? 'active' : ''}>About</Link>
                <Link to="/projects" className={pathname === '/projects' || (pathname === '/' && activeSection === 'projects') ? 'active' : ''}>Projects</Link>
                <Link to="/#skills" className={pathname === '/' && activeSection === 'skills' ? 'active' : ''}>Skills</Link>
                <Link to="/#contact" className={pathname === '/' && activeSection === 'contact' ? 'active' : ''}>Contact</Link>
            </div>
            <div className='navbar__section3'>
                <button>Resume</button>
            </div>
        </nav>
    )

}

export default Navbar