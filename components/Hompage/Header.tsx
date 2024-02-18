// import gsap from 'gsap';
import { motion } from 'framer-motion';
import { NextComponentType } from 'next'
import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Header.module.css'
import {gsap} from 'gsap'

const Header: NextComponentType = () => {
  const logo = useRef(null)

useEffect(() => {
  gsap.fromTo(
    ".bg",
   {
    scaleX:1.25,
    scaleY:1.25,
    filter: "brightness(2.5)",
   },
   {
    scaleX:1,
    scaleY:1,
    filter: "brightness(1)",
    duration: 2,
    ease: 'ease-in'
   }
 )
}, [])
  return (
    <div className={styles.header}>
        
        <div className={`${styles.background} bg`}>
          
        </div>
        <div className={styles.landingText}>
          
          <p></p>
        </div>

        <div className={styles.headerSocials}>
          <div className={styles.socialsWrapper}>
             <a className={styles.socialLink} href="https://twitter.com/Novaverse_NFT" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
            </a> 
             <a className={styles.socialLink}  target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M33.567 7.554a32.283 32.283 0 00-7.969-2.472.12.12 0 00-.128.06c-.344.613-.725 1.411-.992 2.039a29.804 29.804 0 00-8.95 0 20.625 20.625 0 00-1.008-2.038.126.126 0 00-.128-.06 32.194 32.194 0 00-7.968 2.47.114.114 0 00-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 00.137-.045 23.203 23.203 0 002-3.253.124.124 0 00-.068-.172A21.379 21.379 0 019.43 29.99a.126.126 0 01-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 01.126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 01.128.015c.196.162.4.324.608.477a.126.126 0 01-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 00-.067.173 26.052 26.052 0 001.998 3.252c.031.043.087.062.138.046 3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 00.052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 00-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"></path></svg>
            </a> 
            <a className={styles.socialLink}  target="_blank" rel="noreferrer">
                <img src='/media/dark.svg' ></img>
            </a>

          </div>
        </div>
        <div className={styles.arrow}>
          <a href="">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M689.4 629.9c1.9 26.4-95.9 118.5-171.8 185.8-77.5-67.1-184.7-165.1-182.7-192.3-100.6 70.9 11.5 193.4 96.5 266.7-0.5 0.4-0.7 0.6-0.7 0.6l86.2 69.4c0-0.1 321.6-223.3 172.5-330.2z m0-278.2c1.9 26.4-95.9 118.6-171.8 185.9-77.5-67.1-184.7-165.2-182.7-192.4-100.6 70.9 11.5 193.5 96.5 266.7-0.5 0.4-0.7 0.6-0.7 0.6l86.2 69.3s321.6-223.2 172.5-330.1z m-258-21c-0.5 0.4-0.7 0.6-0.7 0.6l86.2 69.3S838.5 177.4 689.4 70.5c1.9 26.4-95.9 118.6-171.8 185.9C440.1 189.3 332.9 91.2 334.9 64c-100.7 70.9 11.5 193.5 96.5 266.7z" fill="currentColor" /></svg>          </a>
        </div>
        
    </div>
  )
}

export default Header