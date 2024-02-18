import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import About from '../components/Hompage/About'
import Faq from '../components/Hompage/Faq'
import Gallery from '../components/Hompage/Gallery'
import Header from '../components/Hompage/Header'
import Petit from '../components/Hompage/Petit'
import Team from '../components/Hompage/Team'
import Text from '../components/Hompage/Text'
import Layout from '../components/Layout/Layout'
import Footer from '../components/Shared/Footer'


  

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
        <Head>
          <title>WUTTER</title>
          <meta name="description" content="WUTTERe" />
          <link rel="icon" href="/io.ico" />
        </Head>
          <Header />
          <Text/>
          <About />
          <Petit/>
         <Gallery/>
          <Team />
          <Faq />
          <Footer />

        <div>

        </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
