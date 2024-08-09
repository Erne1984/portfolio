import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavMobile.css';
import { faBook, faEnvelope, faHouse, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

interface NavMobileProps {
    scrollToSection: (id: string) => void;
}

export default function NavMobile({ scrollToSection }: NavMobileProps) {
    return (
        <nav className='nav-mobile'>
            <FontAwesomeIcon className='icon-mobile' icon={faHouse} onClick={() => scrollToSection('home')} />
            <FontAwesomeIcon className='icon-mobile' icon={faBook} onClick={() => scrollToSection('about')} />
            <FontAwesomeIcon className='icon-mobile' icon={faPenToSquare} onClick={() => scrollToSection('projects')} />
            <FontAwesomeIcon className='icon-mobile' icon={faEnvelope} onClick={() => scrollToSection('contact')} />
        </nav>
    );
}
