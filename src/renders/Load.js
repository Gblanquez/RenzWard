import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Renderer } from '@unseenco/taxi';
gsap.registerPlugin( ScrollTrigger);

export default class LoadRender extends Renderer {
  initialLoad() {
  console.log('hey')
    // run code that should only happen once for your site
  // let customEase =
  //   "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
  // let counter = {
  //   value: 0
  // };
  // let loaderDuration = 10;
  
  // function updateLoaderText() {
  //   let progress = Math.round(counter.value);
  //   $(".load_numb").text(progress);
  // }
  // function endLoaderAnimation() {
  //   const endLine = [...document.querySelectorAll('.line_static')];
  //   const logoSvg = document.getElementById('logo')
  
  //   gsap.set(logoSvg,{
  //       opacity: 0,
  //       scale: 0,
  //   })
  
  
  //   gsap.to(endLine, {
  //       x: '200%',
  //       opacity: 0,
  //       duration: 1.6,
  //       ease: 'expo.out',
  //       stagger: {
  //           each: 0.02
  //       }
  //   })
  
  //   gsap.to(logoSvg, {
  //       scale: 1,
  //       opacity: 1,
  
  //   })
  
  //   gsap.to('.load_wrapper', {
  //       y: '-120%',
  //       opacity: 0,
  //   })
  // }
  
  // let tl = gsap.timeline({
  //   onComplete: endLoaderAnimation
  // });
  // tl.to(counter, {
  //   value: 100,
  //   onUpdate: updateLoaderText,
  //   duration: loaderDuration,
  //   ease: CustomEase.create("custom", customEase)
  // });
  // tl.to(".load_line_wrapper_main", {
  //     width: "0%",
  //     duration: loaderDuration,
  //     ease: CustomEase.create("custom", customEase)
  // }, 0);
  console.log('loading');

    this.onEnter()
    this.onEnterCompleted()
  }

  // rest of your methods
}
