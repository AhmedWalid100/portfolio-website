import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
    <div className='contactContainer'>
        <h2>CONTACT</h2>
      <form ref={form} className='form' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
    );
}

export default Contact