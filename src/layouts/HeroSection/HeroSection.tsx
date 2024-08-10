import './HeroSection.css';
import ButtonPrimary from '../../components/Button-Primary/ButtonPrimary';

interface HeroProps {
    id: string;
    scrollToSection: (id: string) => void;
}

export default function Hero({ id, scrollToSection }: HeroProps) {
    return (
        <div className="hero-container" id={id}>
            <h1 className='title-name'>Ernesto Amorim</h1>
            <p className="typing sub-title">Desenvolvedor Web</p>

            <div className='btn-box' onClick={() => scrollToSection('contact')} >
                <ButtonPrimary
                    type='button'
                    btnText='Contato'
                />
            </div>
        </div>
    );
}
