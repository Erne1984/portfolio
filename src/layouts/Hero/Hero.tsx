import './Hero.css';
import ButtonPrimary from '../../components/Button-Primary/ButtonPrimary';

export default function Hero() {
    return (
        <div className="hero-container">
            <h1 className='title-name'>Ernesto Amorim</h1>
            <p className="typing sub-title">Desenvolvedor Web</p>
            
            <div className='btn-box'>
                <ButtonPrimary/>
            </div>
        </div>
    );
}
