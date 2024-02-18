import { NextComponentType } from "next";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
declare let window: any;

type Props = {
  playing: any;
  toggleMusic: any
}
const Navbar: React.FC<Props>  = ({playing, toggleMusic}) => {
  const [openedNav, setOpenedNav] = useState<boolean>(false);
  const myAudio = useRef<any>();
  const [open, setOpen] = useState(false)
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/media/music.mp3") : undefined
  );

  useEffect(() => {
    playing ? musicPlayers.current?.play() : musicPlayers.current?.pause();
  }, [playing]);


  const timer = (ms:number) => new Promise(res => setTimeout(res, ms))

  const toggleNav = async () => {
    if(open) {
      setOpen(false)
      await timer(300)
      setOpenedNav(false)
    } else {
      setOpen(true)
      setOpenedNav(true)
    }
  }

  return (
<>
   <div className={`${styles.moveBg} ${open ? styles.animationIn : styles.animationOut}`}></div> 
  <div className={styles.navbar}>
  <a href="#header" >
    <img src="media/logo.webp" alt="Logo" style={{ height: '150px' }} />
  </a>
   <a href="/">
      <div className="sc-cc366a7a-0 jqAOcG"></div>
   </a>
   <div className={styles.sound}>
    <button onClick={toggleMusic}>
      <span className={ playing ? '' : styles.muted}></span>
      <span className={ playing ? '' : styles.muted}></span>
      <span className={ playing ? '' : styles.muted}></span>
      <span className={ playing ? '' : styles.muted}></span>
      <span className={ playing ? '' : styles.muted}></span>
    </button>
  </div>
    <div onClick={toggleNav} className={`${styles.topNavMenuHamburger} ${styles.show} ${open ? styles.open : ''}`}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </div>

    <div className={styles.navRight}>
      <div className={styles.navLinks}>
      <div className={styles.navBtn}><Link href="/">Home</Link></div>
        <div className={styles.navBtn}><Link href="/#about">About Us</Link></div>
        <div className={styles.navBtn}><Link href="/#team">Team</Link></div>
        <div className={styles.navBtn}><Link href="/#faq">FAQ</Link></div>
      </div>

    </div>


</div>
<div className={`${styles.navMenu} ${openedNav ? styles.openMenu : styles.closedMenu}`}>
<div className={styles.backgroundImage}>
  
</div>
<div className={styles.backgroundOverlay}></div>
<div className={styles.bigMenu}>
   <div className={styles.containerMenu}>
      
      
      <div onClick={toggleNav} className={styles.menuLink}>
        <div className={styles.navText}>02</div>
        <div className={styles.navLink}><Link href="/#about">About Us</Link></div>
      </div>
      
      <div onClick={toggleNav} className={styles.menuLink}>
        <div className={styles.navText}>04</div>
         <div className={styles.navLink}><Link href="/#team">Team</Link></div>
      </div>
      <div onClick={toggleNav} className={styles.menuLink}>
         <div className={styles.navText}>05</div>
         <div className={styles.navLink}><Link href="/#faq">FAQ</Link></div>
      </div>
   </div>

</div>
</div>
</>
  );
};

export default Navbar;
