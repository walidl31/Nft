import { NextComponentType } from 'next';
import React, { useEffect } from 'react';
import styles from '../../styles/Gallery.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Team: NextComponentType = () => {
    const images = [
        '/media/1.webp',
        '/media/2.webp',
        '/media/3.webp',
        '/media/4.webp',
        '/media/5.webp',
        '/media/6.webp',
        '/media/7.webp',
        'media/1.webp',
        '/media/3.webp',
        '/media/2.webp',
      
    ];

    useEffect(() => {
        // Calculate total width of all images
        const totalWidth = images.length * 100;

        gsap.to('.slideTrack', {
            x: () => `-${totalWidth}vw`,
            ease: 'none',
            scrollTrigger: {
                trigger: '.slider',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });
    }, [images]);

    return (
        <div className={`${styles.slider} slider`}>
            <div className={styles.slideTrack}>
                {images.map((value, index) => (
                    <div className={styles.slide} key={index}>
                        <img src={value} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
