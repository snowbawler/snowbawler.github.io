import { useRef, useLayoutEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Scroll.css'
import LottieScrollTrigger from "./helper/lottieScrollTrigger";
import lottieJson from "../assets/world.json"


gsap.registerPlugin(ScrollTrigger)

export default function Scroll() {

  const lottieTween = useRef();
  const infoPage = useRef();
  //lottieanimation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!lottieTween.current) {
        lottieTween.current = LottieScrollTrigger({
          trigger: 'top',
          target: '.lottie-container',
          animationData: lottieJson,
          speed: 'medium',
          start: '-10px -10px',
          end: '+=200%',
          pin: '.wrapper',
          scrub: 1,
          markers: false,
        });
      }

    });

    return () => ctx && ctx.revert();
  }, []);


  return (
    <>
      <div className="wrapper">
        <div className="lottie-container"></div>
      </div>
    </>
  );
};


