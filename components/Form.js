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
            <input type="text" name="last_name" required />
        </div>
        <div>
            <label>Phone Number</label>
            <input type="text" name="last_name" required />
        </div>
      </div>
      <label>Preferred method of contact</label>
      <div className='checkboxes'>
        <label className="container">Email
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
        </label>
        <label className="container">Phone
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
        </label>
      </div>
      {/* <input type="text" name="user_email" /> */}
      <label>Clinic Name</label>
      <input type="text" name="user_email" required />
      <label>Interest in speaking with CardioOne</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs