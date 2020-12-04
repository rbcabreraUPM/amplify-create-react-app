import React from 'react'

import '../../App.css'
import '../../static/css/HeroSection.css'

import Typing from 'react-typing-animation'

import CoverPhoto from '../../static/img/cover.png'

const HeroSection = () => {
  const helloWorld = 'EVERYTHING STARTS WITH "HELLO WORLD"'
  return (
    <div
      className='hero-container'
      style={{ backgroundImage: `url(${CoverPhoto})` }}
    >
      <h1> RJBC - DEV</h1>
      <Typing loop={true}>
        <p style={{ color: 'white' }}>{helloWorld}</p>
        <Typing.Backspace count={helloWorld.length} delay={500} />
      </Typing>

      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Watch Trailer <i className='far fa-play-circle'></i>
        </Button>
      </div> */}
    </div>
  )
}

export default HeroSection
