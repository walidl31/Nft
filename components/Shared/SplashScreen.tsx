
import { motion } from 'framer-motion'
import { NextComponentType } from 'next'
import styles from '../../styles/Splash.module.css'
type Props = {
  setLoaded: any
}
const Splash: React.FC<Props>  = ({setLoaded}) =>  {
  const entering = () => {
    setLoaded(true)
  }
  return (
    <div className={styles.splash}>
      <motion.h1 data-text="uWUTTER" initial={{opacity: 0.7, scale: 0.8 }}
        animate={{opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 6}} ><span>UwUTTER</span></motion.h1>

      <motion.button initial={{opacity: 0, scale: 0.8 }}
        animate={{opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2}} onClick={entering}>
        Enter 
      </motion.button>
     
    </div>
  )
}

export default Splash