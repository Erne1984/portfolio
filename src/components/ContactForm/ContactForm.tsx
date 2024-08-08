import './ContactForm.css';

import ButtonPrimary from '../Button-Primary/ButtonPrimary';

export default function ContactForm(){

    return(
        <form>
            <input type='text' className='input' placeholder='Nome'></input>

            <input type='text' className='input' placeholder='Email'></input>

            <textarea cols={30} rows={10} ></textarea>

            <ButtonPrimary btnText='Enviar'/>
        </form>
    )
}