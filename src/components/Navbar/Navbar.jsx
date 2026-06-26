import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from "../../assets/icons/menu.svg"
import closeIcon from "../../assets/icons/close.svg"
import './Navbar.css';

function Navbar() {
    const { pathname } = useLocation();
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (pathname !== '/') return;

        const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];

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

    const navLinks = [
        { to: '/#about', label: 'About', section: 'about', isRoute: false },
        { to: '/projects', label: 'Projects', section: 'projects', isRoute: true },
        { to: '/#experience', label: 'Experience', section: 'experience', isRoute: false },
        { to: '/#skills', label: 'Skills', section: 'skills', isRoute: false },
        { to: '/#contact', label: 'Contact', section: 'contact', isRoute: false },
    ];

    const isActive = (section, isRoute) => {
        if (isRoute) return pathname === '/projects';
        return pathname === '/' && activeSection === section;
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <h2>{logo}</h2>
                </Link>
            </div>

            <div className="navbar__links">
                {navLinks.map(({ to, label, section, isRoute }) => (
                    <Link
                        key={section}
                        to={to}
                        className={isActive(section, isRoute) ? 'active' : ''}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className="navbar__resume">
                <a
                    href="/resume/CV.pdf"
                    download="Jegatheesan-Risikesan-CV"
                >
                    <button className="navbar__resume-btn">Resume</button>
                </a>
            </div>

            <div className="navbar__mobile">
                <img
                    src={menuIcon}
                    alt="menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />

                <div className={`navbar__mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <img
                        src={closeIcon}
                        alt="close"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="navbar__mobile-links">
                        {navLinks.map(({ to, label, section, isRoute }) => (
                            <Link
                                key={section}
                                to={to}
                                onClick={() => setIsMenuOpen(false)}
                                className={isActive(section, isRoute) ? 'active' : ''}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="navbar__mobile-resume">
                            <a
                                href="/resume/CV.pdf"
                                download="Jegatheesan-Risikesan-CV"
                            >
                                <button className="navbar__resume-btn">Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
