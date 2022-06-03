import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [ didSend, setDidSend ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gdpxq75', 'template_eselfa8', form.current, 'oGkSHj6RyQNqR-FTT')
      .then((result) => {
          console.log(result.text);
          setDidSend(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    {
        didSend ? 
        <div>
            <h2>Thank you, we received your request.</h2>
        </div>
        :
        <form ref={form} onSubmit={sendEmail}>
            <div className='names'>
                <div>
                    <label>First Name</label>
                    <input type="text" name="first_name" required />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="last_name" required />
                </div>
            </div>
            <div className='names'>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phone" required />
                </div>
            </div>
            <label>Preferred method of contact</label>
            <div className='checkboxes'>
                <label className="container">Email
                    <input type="radio" name="radio-1" />
                    <span className="checkmark"></span>
                </label>
                <label className="container">Phone
                    <input type="radio" name="radio-2" />
                    <span className="checkmark"></span>
                </label>
            </div>
            {/* <input type="text" name="user_email" /> */}
            <label>Clinic Name</label>
            <input type="text" name="clinic" required />
            <label>Interest in speaking with CardioOne</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
        </form>
    }
    </>
  );
};

export default ContactUs