import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

function LottieScrollTrigger(vars) {
  let playhead = { frame: 0 },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = { slow: '+=2000', medium: '+=1000', fast: '+=500' },
    st = {
      trigger: target,
      pin: true,
      start: 'top top',
      end: speeds[vars.speed] || '+=1000',
      scrub: 1,
    },
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || 'svg',
      loop: false,
      autoplay: false,
      path: vars.path,
      animationData: vars.animationData,
    });
  for (let p in vars) {
    st[p] = vars[p];
  }
  animation.addEventListener('DOMLoaded', function () {
    gsap.to(playhead, {
      duration: vars.duration || 0.5,
      delay: vars.delay || 0,
      frame: animation.totalFrames - 1,
      ease: vars.ease || 'none',
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
      scrollTrigger: st,
    });
  
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  });

  return animation;
}

export default LottieScrollTrigger;
