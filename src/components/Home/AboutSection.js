import React from 'react'
import '../../static/css/AboutSection.css'

const AboutSection = () => {
  return (
    <div>
      <div className='flex-container'>
        <div className='flex-item-left'>
          <img
            src='/images/profile.jpg'
            alt='/'
            className='responsive-img'
          ></img>
        </div>
        <div className='flex-item-right'>
          <div className='portfolio_info_div'>
            <h1>About Me</h1>
            <p className='portfolio_info_text'>
              I am a developer specializing in backend development for scalable
              web services. As for backend development, I use Python, JavaScript
              and Java as my main programming language. I also do a little
              frontend work as well. Even though I still use basic Javascript
              and CSS, I am also starting to learn how to build web apps using
              React (for example, like this portfolio).
            </p>
            <br></br>
            <p className='portfolio_info_text'>
              I also teach at the University of the Philippines Manila where I
              handle <i>Database Systems</i> and{' '}
              <i> Interactive Computer Graphics</i>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
