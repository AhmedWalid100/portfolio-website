import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1rbovkq', 'template_gj5hdin', form.current, '5UpJ21tkENwLjNtEC')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent! I will reply to you shortly. Thanks!')
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
    <div id='contact' className='contactContainer'>
        <h2>CONTACT</h2>
      <form ref={form} className='form' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" required/>
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
    );
}

export default Contact