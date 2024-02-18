import { NextComponentType } from 'next'
import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Team.module.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const Team: NextComponentType = () => {
   
  const logo = useRef(null)
  useEffect(() => {
   gsap.fromTo("#titleTeam", 
   {y: 50, opacity: 0},
   { scrollTrigger: {trigger: '#team', start: "top center", toggleActions: 'play none none reverse'},
   y: 0, opacity: 1, duration: 1}
   );
   gsap.fromTo("#founder1", 
   {y: 50, opacity: 0},
   { scrollTrigger: {trigger: '.rows', start: "top center", toggleActions: 'play none none reverse'},
   y: 0, opacity: 1, duration: 1, delay: 0.1}
   );
   gsap.fromTo("#founder2", 
   {y: 50, opacity: 0},
   { scrollTrigger: {trigger: '.rows', start: "top center", toggleActions: 'play none none reverse'},
   y: 0, opacity: 1, duration: 1, delay: 0.4}
   );
   gsap.fromTo("#founder3", 
   {y: 50, opacity: 0},
   { scrollTrigger: {trigger: '.rows', start: "top center", toggleActions: 'play none none reverse'},
   y: 0, opacity: 1, duration: 1, delay: 0.7}
   );
   gsap.fromTo("#founder4", 
   {y: 50, opacity: 0},
   { scrollTrigger: {trigger: '.rows', start: "top center", toggleActions: 'play none none reverse'},
   y: 0, opacity: 1, duration: 1, delay: 1}
   );
  
 }, [])
  return (
    <div className={styles.team} id="team">
    <div className={styles.container}>
    <h2 id="titleTeam">Dream Team</h2>

   <div className={`${styles.rows2} rows2`}>
  

   <div className={styles.memberItem} id="member2" data-wow-duration="2s" data-wow-delay=".4s">
      <img src="/media/7.webp" alt="image Team 2" />
      <h3>Co-Founder</h3>
      <span>Eliot <a href="https://twitter.com/EliotVarock" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg></a></span>
<p></p>
   </div>
   <div className={styles.memberItem} id="member2" data-wow-duration="2s" data-wow-delay=".4s">
      <img src="/media/3.webp" alt="image Team 2" />
      <h3>Founder</h3>
      <span>Sniper <a href="https://twitter.com/EliotVarock" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg></a></span>
      <p></p>
   </div>
   <div className={styles.memberItem} id="member2" data-wow-duration="2s" data-wow-delay=".4s">
      <img src="/media/1.webp" alt="image Team 2" />
      <h3>Co-Founder</h3>
      <span>Eliot <a href="https://twitter.com/EliotVarock" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg></a></span>
      <p></p>
   </div>
   <div className={styles.memberItem} id="member2" data-wow-duration="2s" data-wow-delay=".4s">
      <img src="/media/4.webp" alt="image Team 2" />
      <h3>DEV</h3>
      <span>Zakk<a href="https://twitter.com/EliotVarock" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg></a></span>
      <p></p>

   </div>
   
</div>
</div>
</div>

 );
};

export default Team
