import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../Shared/Navbar";
import { NextComponentType } from "next";
import Cursor from "../Shared/Cursor";
import Footer from "../Shared/Footer";
import Splash from "../Shared/SplashScreen";

const Layout: React.FC<any> = (props: any) => {
  const router = useRouter();
  const [changing, setChanging] = useState(false)
  const [firstClick, setFirst] = useState(false)
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange)
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  const timer = (ms:any) => new Promise(res => setTimeout(res, ms))
  const [loaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   setTimeout(function () {
  //     setLoaded(true);
  //   }, 1500);
  // }, []);
  const handleRouteChange = async (url: any) => {
    setChanging(true)
    await timer(1000)
    setChanging(false)
    // console.log(
    //   `App is changing to ${url}`
    // )
    // setState({ clicked: false, menuName: "Menu" })
  }
  const clicking = () => {
    if(!firstClick) {
      toggleMusic()
      setFirst(true)
    }
  }
  const toggleMusic = () => {
    setPlaying(!playing);
  }
  return (
    <main onClick={clicking}>
    {!loaded && (
      <>
        <Splash setLoaded={setLoaded}/>
      </>
    )}

{loaded && (

    <>
      <Head>
      <Head>
        <title></title>
        <meta name="description" content="UWUTTER" />
        <link rel="icon" href="/io.ico" />
        </Head>
      </Head>
      {/* <Cursor /> */}

      <Navbar playing={playing} toggleMusic={toggleMusic} />
      <div  className="application">
      {props.children}
      </div>


    </>
      )}
      </main>
  );
};

export default Layout;
