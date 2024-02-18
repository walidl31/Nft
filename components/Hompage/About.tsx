// import gsap from 'gsap';
import { NextComponentType } from 'next'
import React, { useEffect, useRef } from 'react';
import styles from '../../styles/About.module.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About: NextComponentType = () => {
  useEffect(() => {
    gsap.fromTo(".title-about", 
    {y: 50, opacity: 0},
    { scrollTrigger: {trigger: '.title-about', start: "top center", toggleActions: 'play none none reverse'},
    y: 0, opacity: 1, duration: 1}
    );
    gsap.fromTo(".p1-about", 
    {y: 50, opacity: 0},
    { scrollTrigger: {trigger: '.title-about', start: "top center", toggleActions: 'play none none reverse'},
    y: 0, opacity: 1, duration: 1, delay: 0.2}
    );
    gsap.fromTo(".p2-about", 
    {y: 50, opacity: 0},
    { scrollTrigger: {trigger: '.title-about', start: "top center", toggleActions: 'play none none reverse'},
    y: 0, opacity: 1, duration: 1, delay: 0.4}
    );
    gsap.fromTo(".img", 
    {y: 50, opacity: 0},
    { scrollTrigger: {trigger: '.title-about', start: "top center", toggleActions: 'play none none reverse'},
    y: 0, opacity: 1, duration: 2, delay: 0.6}
    );
  }, [])
  return (
    <div className={styles.about} id='about'>
      <div className={styles.wrapper}>
        <div className={styles.aboutGrid}>
        <div className={styles.aboutContent}>
          <h2 className='title-about'>About Us</h2>
          <p className='p1-about'>NOVAVERSE Genesis Collection of 555 NFTs each featuring a unique, powerful queen. Each NFT includes a combination of colorful and detailed illustrations, showcasing the diversity and strength of these regal figures, offering a glimpse into the world of these powerful women in the Novaverse.</p>
          <p className='p2-about'>The core of our project's story is strongly influenced by the idea of self-worth, determination, and sacrifice. The Queens of Novaverse play a central role in this narrative as they embody these virtues and serve as powerful examples of strength and leadership. Through their stories, we aim to inspire our community to reflect on times in their own lives when they've displayed similar qualities and to empower them to strive for greatness in their own lives.</p>
        </div>
        <div className={`${styles.aboutImg} img`}>
          <img alt="Koo NFT" src="/media/About Us 1.webp" decoding="async" data-nimg="intrinsic" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default About