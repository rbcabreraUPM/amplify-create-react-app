import React from 'react'
import '../App.css'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import Experience from '../components/Home/Experience'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <Experience></Experience>
      <Footer stickyStyle={false}></Footer>
    </>
  )
}

export default Home
