import React from 'react'
import Home from "./Home"
import About from "./About"
// import Work from './Work'
import Project from './Project'
import Contact from './Contact'
const Main = () => {
  return (
    <>
        <section id='home'  >
            <Home/>
        </section>

        <section id='about'>
            <About/>
        </section>

        {/* <section id='work'>
            <Work/>
        </section> */}
        <section id='project'>
            <Project/>
        </section>
        <section id='contact'>
            <Contact/>
        </section>
    </>
  )
}

export default Main