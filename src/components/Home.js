import React, { useRef } from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import About from './About'
import Work from "./Work"
import Contact from "./Contact"
import Footer from './Footer'
import { FiArrowRight } from "react-icons/fi"

export const Home = () => {

    const contactComponentRef = useRef();
    const workComponentRef = useRef();
    const homeComponetRef = useRef();
    const aboutComponetRef = useRef();

    const scrollToContactComponent = () => {
        if (contactComponentRef.current) {
            window.scrollTo({
                top: contactComponentRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const scrollToHomeComponet = () => {
        if (homeComponetRef.current) {
            window.scrollTo({
                top: homeComponetRef.current.offsetTop,
                behavior: 'smooth',
            })
        }
    }

    const scrollToWorkComponent = () => {
        if (workComponentRef.current) {
            window.scrollTo({
                top: workComponentRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const scrollToAboutComponent = () => {
        if (aboutComponetRef.current) {
            window.scrollTo({
                top: aboutComponetRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className='home-container' ref={homeComponetRef}>
            <Navbar scrollToContactComponent={scrollToContactComponent}
                scrollToHomeComponet={scrollToHomeComponet}
                scrollToAboutComponent={scrollToAboutComponent}
            />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <img src={BannerBackground} alt='' />
                </div>
                <div className='home-text-section'>
                    <h1 className='primary-heading'>
                        Simplify Meal Planning with Cookzy.
                    </h1>
                    <p className='primary-text'>
                        Discover personalized recipes, create effortless meal plans, and savor every bite.
                    </p>
                    <button className='secondary-button' onClick={scrollToContactComponent}>
                        Sign up <FiArrowRight />
                    </button>
                </div>
                <div className='home-image-container'>
                    <img src={BannerImage} alt='Home' />
                </div>
            </div>
            <About scrollToWorkComponent={scrollToWorkComponent} aboutComponetRef={aboutComponetRef} />
            <Work workComponentRef={workComponentRef} />
            <Contact contactComponentRef={contactComponentRef} />
            <Footer scrollToHomeComponet={scrollToHomeComponet}
                scrollToWorkComponent={scrollToWorkComponent}
                scrollToContactComponent={scrollToContactComponent}
                scrollToAboutComponent={scrollToAboutComponent}
            />
        </div>
    )
}

export default Home;