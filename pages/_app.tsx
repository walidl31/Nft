import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Script from 'next/script';
import Splash from '../components/Shared/SplashScreen'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
  

    <motion.div
    key={router.route}
    initial="pageInitial"
    animate="pageAnimate"
    variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
      },
    }}
    >
    
    <Component {...pageProps} />
    <ToastContainer />
  </motion.div>


  )
}