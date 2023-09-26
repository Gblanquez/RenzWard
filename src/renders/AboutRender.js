import { Renderer } from '@unseenco/taxi';
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger);



export default class aboutRender extends Renderer {
  onEnter() {
    // run after the new content has been added to the Taxi container
  }

  onEnterCompleted() {
     // run after the transition.onEnter has fully completed
  }

  async onLeave() {
    // run before the transition.onLeave method is called
    const mainH1About = [...document.querySelectorAll('[data-a="about-h1"]')];
    const aboutInfo = [...document.querySelectorAll('[data-a="about-text"]')];
    
    const aboutText = new SplitType(mainH1About, { types: 'words, chars, lines'  })
    const aboutTextInfo = new SplitType(aboutInfo, { types: 'words, chars, lines'  })
   
  
    await Promise.all([

      console.log('its suposse to await'),

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
  
      },0.1),
  
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
    }, 0.2)


    ])


    
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed

    
  }
}