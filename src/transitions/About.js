import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import Lenis from '@studio-freight/lenis'
import 'swiper/css/bundle';

gsap.registerPlugin( ScrollTrigger);



export default class AboutPage extends Transition {
    /**
     * Handle the transition leaving the previous page.
     * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
     */
async onLeave({ from, trigger, done }) {
      // do something ...



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
      
  

      done()
    }
  
    /**
     * Handle the transition entering the next page.
     * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
     */
    onEnter({ to, trigger, done }) {
      // do something else ...


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


      const mainH1About = [...document.querySelectorAll('[data-a="about-h1"]')];
      const aboutInfo = [...document.querySelectorAll('[data-a="about-text"]')];
      
      const aboutText = new SplitType(mainH1About, { types: 'words, chars, lines'  })
      const aboutTextInfo = new SplitType(aboutInfo, { types: 'words, chars, lines'  })

      
      gsap.from(aboutText.words, {
        y: '120%',
        duration: 1.6,
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

      })

      gsap.from(aboutTextInfo.lines, {
        y: '120%',
        duration: 1.8,
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
    })

      
      done()
    }
  }
