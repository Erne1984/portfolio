import { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavMobile from '../NavMobile/NavMobile';

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    const sections: string[] = ['home', 'about', 'projects', 'contact'];

    const handleScroll = (): void => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        let currentSection = activeSection;
        for (const section of sections) {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section;
                    break;
                }
            }
        }
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    const scrollToSection = (id: string): void => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMobileMenu(false); 
        }
    };

    return (
        <header>
            <div className='header-box'>
                <h2>Ernesto Amorim</h2>
                <nav className='header-menu'>
                    <span className={`list-item ${activeSection === 'home' ? 'selected' : ''}`} onClick={() => scrollToSection('home')}>Início</span>
                    <span className={`list-item ${activeSection === 'about' ? 'selected' : ''}`} onClick={() => scrollToSection('about')}>Sobre Mim</span>
                    <span className={`list-item ${activeSection === 'projects' ? 'selected' : ''}`} onClick={() => scrollToSection('projects')}>Projetos</span>
                    <span className={`list-item ${activeSection === 'contact' ? 'selected' : ''}`} onClick={() => scrollToSection('contact')}>Contato</span>
                </nav>
                <FontAwesomeIcon className='mobile-menu' icon={faBars} onClick={() => setMobileMenu(!mobileMenu)} />
            </div>

            {mobileMenu && <NavMobile scrollToSection={scrollToSection} />}
        </header>
    );
}
