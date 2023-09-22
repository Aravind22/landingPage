import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutImage from "../Assets/about-background-image.png"
import { FiArrowRight } from "react-icons/fi"

const About = ({scrollToWorkComponent, aboutComponetRef}) => {
    return (
        <div className='about-section-container' ref={aboutComponetRef}>
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt='' />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutImage} alt='' />
            </div>
            <div className='about-text-container'>
                <p className='primary-subheading'>
                    About
                </p>
                <h1 className='primary-heading'>
                    From App Creators to Food Enthusiasts.
                </h1>
                <p className='primary-text'>
                    Cookzy began with a shared love for food. Our mission is to simplify meal planning, enhance your culinary journey, 
                    and empower home cooks of all levels. Join us as we combine technology and passion to make cooking a delightful experience.
                </p>
                <button className='secondary-button' onClick={scrollToWorkComponent}>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default About