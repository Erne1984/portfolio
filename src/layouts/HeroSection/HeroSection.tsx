import './HeroSection.css';
import ButtonPrimary from '../../components/Button-Primary/ButtonPrimary';

interface HeroProps {
    id: string
}

export default function Hero( props: HeroProps) {
    return (
        <div className="hero-container" id={props.id}>
            <h1 className='title-name'>Ernesto Amorim</h1>
            <p className="typing sub-title">Desenvolvedor Web</p>
            
            <div className='btn-box'>
                <ButtonPrimary btnText='Contato'/>
            </div>
        </div>
    );
}
