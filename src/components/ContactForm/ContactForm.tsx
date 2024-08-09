import React, { useRef, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import ButtonPrimary from '../Button-Primary/ButtonPrimary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            const formData = new FormData(form.current);
            const email = formData.get('user_email') as string;

            if (!validateEmail(email)) {
                toast.error('Por favor, insira um email válido.');
                return;
            }

            emailjs.sendForm('service_ms3rv7g', 'template_vuldt92', form.current, 'nKshjTDntmyKsyS8I')
                .then((result) => {
                    console.log(result.text);
                    toast.success('Mensagem enviada com sucesso!');
                }, (error) => {
                    console.log(error.text);
                    toast.error('Ocorreu um erro ao enviar a mensagem.');
                });

            e.currentTarget.reset();
        }
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type='text'
                    name='user_name'
                    className='input'
                    placeholder='Nome'
                    required
                />
                <input
                    type='email'
                    name='user_email'
                    className='input'
                    placeholder='Email'
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"  
                    title="Por favor, insira um email válido."
                />
                <textarea
                    name='message'
                    placeholder='Sua Mensagem...'
                    cols={30}
                    rows={10}
                    required
                ></textarea>
                <div className='btn-contact-box'>
                    <ButtonPrimary btnText='Enviar' type='submit' />
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default ContactForm;
