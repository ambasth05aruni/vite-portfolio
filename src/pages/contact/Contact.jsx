import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  // FaFacebookF,
  FaLinkedin,
  FaTwitter,
  // FaYoutube,
  // FaDribble,
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_frs1s8d', 'template_gvkikla', form.current, 'PzaDPT2bJM4eVvKEs')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
      });

    e.target.reset();
  };
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container contact grid">
        <div className="contact__data">
          <h3 className="contact__title">Hey, Lets Connect!</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, 
            creative ideas or opportunities to be a part of your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">ambasthaarunima0512@gmail.com</h4>
                </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Contact me</span>
                <h4 className="info__desc">+91 6200110253</h4>
                </div>
            </div>

          </div>

          <div className="contact__socials">
            <a href= 'https://x.com/Arunimambastha5' className="contact__social-link">
            <FaTwitter/>
            </a>
            <a href= 'https://www.linkedin.com/in/arunima-ambastha-486667229/' className="contact__social-link">
            <FaLinkedin/>
            </a>
          </div>
        </div>

        <form ref={form}onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text"
              name="user_name"
              placeholder='Your Name'
              className='form__control'
              required
              />
            </div>
            <div className="form__input-div">
              <input type="email"
              name="user_email"
              placeholder='Your Email'
              className='form__control'
              required
              />
              </div>
               <div className="form__input-div">
              <input type="text"
              name="subject"
              placeholder='Your Subject'
              className='form__control'
              required 
              />
            </div>
            
          </div>

          <div className="form__input-div">
             <textarea name="message" placeholder='Your Message' className='form__control textarea' required ></textarea>
            </div>

<button className="button" type="submit">Send Message 

  <span className="button__icon contact__button-icon"><FiSend/></span>
</button>


        </form>
      </div>
    </section>
    
  )
}

export default Contact