import './ContactForm.css';

import ButtonPrimary from '../Button-Primary/ButtonPrimary';

export default function ContactForm() {

    return (
        <form>
            <input type='text' className='input' placeholder='Nome'></input>

            <input type='text' className='input' placeholder='Email'></input>

            <textarea placeholder='Sua Mensagem...' cols={30} rows={10} ></textarea>

            <div className='btn-contact-box'>
                <ButtonPrimary btnText='Enviar' />
            </div>

        </form>
    )
}