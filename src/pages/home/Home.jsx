import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import './Home.css';
import Typewriter from 'typewriter-effect';


const Home = () => {
  const roles = ["Web Developer",
      "UI/UX Designer",
      "Programmer",
      "Open-Source Contributor"];

  return (
   <section className="home section grid">
    <img src={Profile} alt="" className="home__img" />

    <div className="home__content">
      <div className="home__data">
        <h1 className="home__title"><span>I'm Arunima Ambastha. </span></h1>
        <h4 className='typewriter-text'>
        <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                pauseFor: 1000,
              }}

              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    const typewriterElement = document.querySelector('.Typewriter__wrapper');
                    if (typewriterElement) {
                      typewriterElement.classList.add('typewriter-text');
                    }
                  })
                  .start();
                }}
            />
        </h4>
        

        <p className="home__description">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for
           learning I am dedicated to delivering high-quality results. 
           With a positive attitude and a growth mindset, I am ready to make a 
           meaningful contribution and achieve great things.</p>

           <Link to='/about' className='button'>
           More About Me{' '}
           <span className='button__icon'>
            <FaArrowRight/>
           </span>
           </Link>
      </div>
    </div>

    <div className="color__block">

    </div>
   </section>
  )
}

export default Home