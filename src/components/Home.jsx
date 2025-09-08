import React from 'react'
import Hero from './Hero'
import { AboutMe, TechnicalStack } from './AboutMe'
import Footer from './Footer'
import ContactMe from './ContactMe'
import Experience from './Experience'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutMe />
        <Projects />
        <TechnicalStack />
        <Experience />
        <ContactMe />
    </div>
  )
}

export default Home