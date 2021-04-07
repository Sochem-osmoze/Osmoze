import React from  'react'
import CircularTimer from './Timer'
import Owlcarousel from './Owlcarousel'
import '../css/homepage.css'

const HomePage = () =>{
    return (
        <>
            <section id="hero">
    <div class="hero-container" data-aos="zoom-in" data-aos-delay="100">
    <p class="mb-4 pb-0">Welcome to the Annual Chemical Extravaganza</p>
      <h1 class="mb-4 pb-0"><span style={{color:'#1e7fff'}}>Osmoze </span>'21</h1>

        <CircularTimer />
      <a href="#about" class="about-btn scrollto">About The Event</a>
    </div>
  </section>

  <main id="main"/>

    
    <section id="about">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6">
            <h2>About The Event</h2>
            <p>
              Osmoze is the annual technical extravaganza organized by the Department 
              of Chemical engineering, IIT BHU, Varanasi. We intend to provide a competitive 
              platform for honing technical and professional skills of students, especially those 
              interested in chemical engineering. Different contests of the festival include Udyog – 
              industrial problem solving competition, Adhyayan – a case study event, and a veritable 
              potpourri of events to nurture the engineering professional inside you. Osmoze is the 
              perfect platform to enhance your professional skills and experience a unique atmosphere
               of creativity and innovation. So mark your calendar for 16th-18th April and get ready 
               for this one of a kind fest.
            </p>
          </div>
          <div class="col-lg-6">
          <Owlcarousel />
            </div>
        </div>
      </div>
    </section>

        </>
    )
}

export default HomePage;