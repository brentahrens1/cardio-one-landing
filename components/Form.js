import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

  return (
    <form ref={form}>
      <div className='names'>
        <div>
            <label>First Name</label>
            <input type="text" name="first_name" />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" name="last_name" />
        </div>
      </div>
      <label>Preferred method of contact?</label>
      <div className='checkboxes'>
        <div className='method-frame frame-1'>
            <label className='method' for="phone">Phone</label>
            <input className='method-input' type="checkbox" id="phone" name="phone" value="Phone" />
        </div>
        <div className='method-frame'>
            <label className='method' for="email">Email</label>
            <input className='method-input' type="checkbox" id="email" name="email" value="Email" />
        </div>
      </div>
      {/* <input type="text" name="user_email" /> */}
      <label>Clinic Name</label>
      <input type="text" name="user_email" />
      <label>Interest in speaking with CardioOne</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs