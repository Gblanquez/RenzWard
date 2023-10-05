import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


gsap.registerPlugin( ScrollTrigger);

export default class myHome extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
   async onLeave({ from, trigger, done }) {

    const mainH1About = [...document.querySelectorAll('[data-a="about-h1"]')];
    const aboutInfo = [...document.querySelectorAll('[data-a="about-text"]')];
    
    const aboutText = new SplitType(mainH1About, { types: 'words, chars, lines'  })
    const aboutTextInfo = new SplitType(aboutInfo, { types: 'words, chars, lines'  })

    await Promise.all([
      gsap.to(aboutTextInfo.lines, {
        y: '-120%',
        duration: 0.8,
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

    gsap.to(aboutText.lines, {
      y: '-120%',
      duration: 1.4,
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

    }, 0.1),
  

    ])
    
    done()
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    let lenis;
    lenis = new Lenis({
      lerp: 0.1,
      orientation: 'horizontal',
      infinite: true,
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
    // do something else ...
    // $('.slider_main_wrapper').each(function (index) {
    //     const swiper = new Swiper($(this).find('.swiper')[0], {
    //         slidesPerView: 'auto',
    //         mousewheel: {
    //             invert: true,
    //             // sensitivity: 1,
                
    //         },
    //         speed: 800,
    //         keyboard: true,
    //         centeredSlides: true,
    //         loop: true,
    //         followFinger: true,
            
    
    //     });
    // });


    const homeT = document.querySelectorAll("[data-a='home-text']");
    const socialL = document.querySelectorAll("[data-a='social-text']");
    const navLink = document.querySelectorAll("[data-a='nav-text']");
    const workText = document.querySelectorAll("[data-a='work-text']");
    const locationTexts = document.querySelectorAll("[data-a='location']");
    const homeImg = document.querySelectorAll("[data-a='home-img']");
    const lineDrag = document.querySelectorAll("[data-a='drag-line']");
    const loadDrag = document.querySelectorAll("[data-a='drag-load']");
    const locationT = document.querySelector('.time_text')
  
  
    const heroText = new SplitType(homeT, { types: 'words, chars, lines'  })
    const heroWorkText = new SplitType(workText, { types: 'words, chars, lines'  })
    const heroNavText = new SplitType(navLink, { types: 'words, chars, lines'  })
    const heroSocialText = new SplitType(socialL, { types: 'words, chars, lines'  })
    const locationText = new SplitType(locationTexts, { types: 'words, chars, lines' })

    const linkWrap = [...document.querySelectorAll('.case_study_link')]

    gsap.from(heroSocialText.lines, {
      y: '120%',
      delay: 1.6,
      opacity: 0,
      duration: 1.6,
      ease: 'expo.out',
      stagger: {
        each: 0.03
      }
    })


    gsap.from(heroWorkText.lines, {
      y: '120%',
      delay: 1.6,
      opacity: 0,
      duration: 1.6,
      ease: 'expo.out',
      stagger:{
        each: 0.03
      }
    })

    gsap.from(homeImg, {
      skewY: '50%',
      delay: 1.6,
      skewX: '10%',
      scale: 1.1,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: {
        each: 0.02
      }
    })
    
    gsap.from(homeImg, {
      x: '-110%',
      delay: 1.6,
      y: '-30%',
      ease: 'expo.out',
      duration: 2,
      stagger: {
        each: 0.02
      }
    })


    done()
  }
}