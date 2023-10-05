import { Renderer } from '@unseenco/taxi';
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import { AlphaFormat } from 'three';
gsap.registerPlugin( ScrollTrigger);



export default class aboutRender extends Renderer {
  onEnter() {
    // run after the new content has been added to the Taxi container
  }

  onEnterCompleted() {
    let lenis;
    lenis = new Lenis({
      lerp: 0.1,
      orientation: 'vertical',
      infinite: false,
      wheelMultiplier: 0.4,
      gestureOrientation: "both",
      normalizeWheel: false,
      smoothTouch: false
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  async onLeave() {
    // run before the transition.onLeave method is called


    const mainH1About = [...document.querySelectorAll('[data-a="about-h1"]')];
    const aboutInfo = [...document.querySelectorAll('[data-a="about-text"]')];
    
    const aboutText = new SplitType(mainH1About, { types: 'words, chars, lines'  })
    const aboutTextInfo = new SplitType(aboutInfo, { types: 'words, chars, lines'  })
   
    const allPage = document.querySelector('.home_page_wrapper')

    await Promise.all([


        gsap.to(aboutText.words, {
          y: '120%',
          duration: 0.6,
          opacity: 0,
          ease: 'expo.out',
          // scrollTrigger: {
          //     trigger: aboutText.lines,
          //     start: 'top bottom',
          //     scrub: 1
          // },
          stagger: {
              each: 0.02
          }
    
        }),
    
        gsap.to(aboutTextInfo.lines, {
          y: '120%',
          duration: 0.6,
          opacity: 0,
          ease: 'expo.out',
          // scrollTrigger: {
          //     trigger: aboutTextInfo.lines,
          //     start: 'top bottom',
              
          //     scrub: 1
          // },
          stagger: {
              each: 0.02
          }
      }),

      gsap.to(allPage,{
        width: '90vw',
        backgroundColor: "white",
        height: '90vh',
        opacity: '90%',
        ease: 'expo.out',
        duration: 1.2
      })
    ])



    
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed

    
  }
}