// import gsap from 'gsap';
import { motion } from 'framer-motion';
import { NextComponentType } from 'next'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Faq.module.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Faq: NextComponentType = () => {
    const questions = [
        {question: 'What is WUTTER ?', answer: <><p className={styles.faqText}> Collection of 555 NFTs each featuring a unique, powerful queen. Each NFT includes a combination of colorful and detailed , showcasing the diversity and strength of these regal figures, offering a glimpse into the world of these powerful women in the Novaverse.</p>
        </> 
        },
        // {question: 'What are the virtues Of Novaverse Genesis ?', answer: <> <p className={styles.faqText}>Yuuki; Heroic Courage.</p>
        // <p className={styles.faqText}>Strength</p>
        // <p className={styles.faqText}>Courage</p>
        // <p className={styles.faqText}>Makoto; Honesty.</p>
        // <p className={styles.faqText}>Chuugi; Loyalty.</p>
        // <p className={styles.faqText}>Gi; Integrity</p>
        // <p className={styles.faqText}>Jin; Compassio</p> </>},
        {question: 'When is WUTTER minting?', answer: <p className={styles.faqText}>ess for all collectors, so we will never have a stealth mint. All minting will take place on our official website, and we will announce the details on our official Twitter account.</p>},
        {question: " How do I get into UWUTTER List ?", answer: <p className={styles.faqText}> Collection of 555 Unique NFT's</p>}
    ]
    const [selected, setSelected] = useState([false, false, false, false, false, false])
    const selectQuestion = (index: number) => {
        const newSelected = [...selected]
        newSelected[index] = !newSelected[index]
        setSelected(newSelected)
    }
    const variants = {
        initial: { opacity: 0, height: 0 },
        animate: {
            opacity: 1, 
            height: 'auto',
            transition: {
                type: "ease",
                duration: .35,
            }
        }
    }
    const logo = useRef(null)
    useEffect(() => {
     gsap.fromTo("#titleFaq", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1}
     );
     gsap.fromTo("#SubtitleFaq", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 0.1}
     );
     gsap.fromTo("#paragraph0", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 0.4}
     );
     gsap.fromTo("#paragraph1", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 0.7}
     );
     gsap.fromTo("#paragraph2", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 1}
     );
     gsap.fromTo("#paragraph3", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 1.3}
     );
     gsap.fromTo("#paragraph4", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 1.6}
     );
     gsap.fromTo("#paragraph5", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 1, delay: 1.9}
     );
     gsap.fromTo("#faqImg", 
     {y: 50, opacity: 0},
     { scrollTrigger: {trigger: '#faq', start: "top center", toggleActions: 'play none none reverse'},
     y: 0, opacity: 1, duration: 2.4, delay: 0.2}
     );

   }, [])
  return (
<section className={styles.faq} id="faq">
   <div className={styles.wrapper}>
      <div className={styles.faqRow}>
         <div className={styles.faqContent}>
            <h2 className={styles.title} id="titleFaq">
                <span className={styles.titleContainer}>
                    <span>FAQ</span>
                </span>
            </h2>
            <p className={styles.subtitle} id="SubtitleFaq"></p>
            <ul className={styles.faqList}>
                {questions.map((value, index) => { return (
               <div className={`${styles.faqSection}  ${selected[index] ? styles.activeAsnwer : ''}`} id={`paragraph${index}`} key={index}>
                  <button className={styles.faqBtn} onClick={() => selectQuestion(index)}>
                     <svg className="chevron accordion__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="#2d2d2d" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                     </svg>
                     <p id="accordion__title">{value.question}</p>
                  </button>
                  <motion.div variants={variants}
                    initial="initial"
                    animate={selected[index] ? "animate" : "initial"}  className={styles.faqAnswer}>
                        <div className={styles.textContainer}>
                        {value.answer}
                        </div>
                  </motion.div>
               </div>
               )})}
            </ul>
         </div>
      </div>
   </div>
</section>
  )
}

export default Faq