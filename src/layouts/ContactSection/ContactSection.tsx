import './ContactSection.css';

import ContactForm from '../../components/ContactForm/ContactForm';

import githubLogo from '/assets/icons/icons8-github.svg';
import linkedinLogo from '/assets/icons/icons8-linkedin (1).svg';


export default function ContactSection() {

    return (

        <section className='contact-section'>


            <ContactForm />

            <div className='contact-info-container'>

                <h3>Email Para Contato</h3>
                <div className='email-for-contact'>ernestofamorim@gmail.com</div>

                <h3>Adicione nas Redes</h3>

                <div className='box-redes'>

                    <div className='box-rede'>
                        <a href='https://github.com/Erne1984'><img className='icons' src={githubLogo}></img></a>
                        <div className='link-path'>/Erne1984</div>
                    </div>

                    <div className='box-rede'>
                        <a href="https://www.linkedin.com/in/ernesto-amorim/"><img className='icons' src={linkedinLogo}></img></a>
                        <div className='link-path'>/ernesto-amorim</div>
                    </div>

                </div>

            </div>

        </section>


    )
}