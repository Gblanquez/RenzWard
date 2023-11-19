import { Renderer } from '@unseenco/taxi';
import gsap from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { event } from 'jquery';
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin( ScrollTrigger, CustomEase);
gsap.registerPlugin(ScrambleTextPlugin);

console.log(ScrambleTextPlugin)
export default class homeRender extends Renderer {
  initialLoad() {

    // Get the elements
const pageLinks = document.querySelectorAll("[data-a='link']");
const socialLinks = document.querySelectorAll('.social_global_link');

// Register the ScrambleTextPlugin
gsap.registerPlugin(ScrambleTextPlugin);

// Function to add animations
function addAnimations(links) {
  links.forEach(link => {
    const textElement = link.querySelector("[data='t-link']");
    const lineElement = link.querySelector("[data-a='s-link']");
    let originalText = textElement.textContent;

    link.addEventListener('mouseover', () => {
      // Start the scramble animation
      gsap.to(textElement, {
        duration: 0.5,
        scrambleText: {
          text: originalText,
          chars: 'abcdefghijklmnopqrstuvwxyz',
          speed: 0.3
        }
      });

      // Animate the link line
      gsap.to(lineElement, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power1.out',
        transformOrigin: 'left'
      });
    });

    link.addEventListener('mouseout', () => {
      // Stop the scramble animation and return to the original text
      gsap.to(textElement, {
        duration: 0.5,
        scrambleText: {
          text: originalText,
          chars: originalText,
          speed: 0.3
        }
      });

      // Animate the link line
      gsap.to(lineElement, {
        scaleX: 0,
        duration: 0.5,
        ease: 'power1.out',
        transformOrigin: 'right'
      });
    });
  });
}

// Add animations to the links
addAnimations(pageLinks);
addAnimations(socialLinks);


    //Lenis Scroll

    // const isMobile = window.innerWidth < 768;
    // isMobile ? "vertical" : "horizontal"
    


    let lenis;
    if (Webflow.env("editor") === undefined) {
      lenis = new Lenis({
        lerp: 0.1,
        orientation: window.innerWidth < 830 ? 'vertical' : 'horizontal',
        infinite: true,
        wheelMultiplier: 0.4,
        gestureOrientation: "both",
        normalizeWheel: true,
        smoothTouch: false
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        
      }
      requestAnimationFrame(raf);
    }


    // Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Event listener for resize
window.addEventListener('resize', debounce(function() {
  lenis.orientation = window.innerWidth < 830 ? 'vertical' : 'horizontal';
}, 100));


    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });










    //End Lenis Scroll




    //Lottie File Beging




    //Lottie File End
  const homeT = document.querySelectorAll("[data-a='home-text']");
  const homeImg = document.querySelectorAll("[data-a='home-img']");
  const lineDrag = document.querySelectorAll("[data-a='drag-line']");
  const loadDrag = document.querySelectorAll("[data-a='drag-load']");
  const locationT = document.querySelector('.time_text')


  const heroText = new SplitType(homeT, { types: 'words, chars, lines'  })
  const locationText = new SplitType(locationT, { types: 'words, chars, lines'  })

  let customEase =  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
  let counter = {
    value: 0
  };
  let loaderDuration = 3;
  
  function updateLoaderText() {
    let progress = Math.round(counter.value);
    $(".load_numb").text(progress);
  }

  function playLottie (){
    $('.trigger').trigger('click');
    console.log('playing lottie')
  }
  function endLoaderAnimation() {


  playLottie();


    const endLine = [...document.querySelectorAll('.line_static')];
    const logoSvg = document.getElementById('logo')
    const linkWrap = [...document.querySelectorAll('.case_study_link')]
  


    gsap.to(endLine, {
        y: '110%',
        duration: 1.6,
        ease: 'expo.out',
        stagger: {
            each: 0.02
        }
    }, 0.1)
    gsap.to('.load_wrapper', {
        y: '-120%',
        opacity: 0,
        duration: 1.8,
        ease: 'expo.out'
    }, 0.2)

    gsap.from(heroText.lines, {
      y: '110%',
      duration: 1.8,
      ease: 'expo.out',
      stagger:{
        each: 0.02
      }
    })


    // gsap.from(linkWrap, {
    //   x: '120%',
    //   duration: 2.6,
    //   ease: 'expo.out',
    //   stagger: {
    //     each: 0.02
    //   }
    // })

    gsap.from(homeImg, {
      skewY: '50%',
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
      y: '-30%',
      ease: 'expo.out',
      duration: 2,
      stagger: {
        each: 0.02
      }
    })
  }
  
  let tl = gsap.timeline({
    onComplete: endLoaderAnimation
  });
  tl.to(counter, {
    value: 100,
    onUpdate: updateLoaderText,
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
  });
  tl.to(".load_line_wrapper_main", {
      width: "0%",
      duration: loaderDuration,
      ease: CustomEase.create("custom", customEase)
  }, 0);
  tl.to(loadDrag, {
    x: '80dvw',
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
  }, 0);


    console.log('its loading');



 


  }



  

  onEnter() {
    // run after the new content has been added to the Taxi container


    
  }

  onEnterCompleted() {
    // Get the elements
const pageLinks = document.querySelectorAll("[data-a='link']");
const socialLinks = document.querySelectorAll('.social_global_link');

// Register the ScrambleTextPlugin
gsap.registerPlugin(ScrambleTextPlugin);

// Function to add animations
function addAnimations(links) {
  links.forEach(link => {
    const textElement = link.querySelector("[data='t-link']");
    const lineElement = link.querySelector("[data-a='s-link']");
    let originalText = textElement.textContent;

    link.addEventListener('mouseover', () => {
      // Start the scramble animation
      gsap.to(textElement, {
        duration: 0.5,
        scrambleText: {
          text: originalText,
          chars: 'abcdefghijklmnopqrstuvwxyz',
          speed: 0.3
        }
      });

      // Animate the link line
      gsap.to(lineElement, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power1.out',
        transformOrigin: 'left'
      });
    });

    link.addEventListener('mouseout', () => {
      // Stop the scramble animation and return to the original text
      gsap.to(textElement, {
        duration: 0.5,
        scrambleText: {
          text: originalText,
          chars: originalText,
          speed: 0.3
        }
      });

      // Animate the link line
      gsap.to(lineElement, {
        scaleX: 0,
        duration: 0.5,
        ease: 'power1.out',
        transformOrigin: 'right'
      });
    });
  });
}

  addAnimations(pageLinks);
  addAnimations(socialLinks);
 
}

  onLeave() {
    // run before the transition.onLeave method is called

    const tl = gsap.timeline()
    const homeT = document.querySelectorAll("[data-a='home-text']");
    const socialL = document.querySelectorAll("[data-a='social-text']");
    const workText = document.querySelectorAll("[data-a='work-text']");
    const homeImg = document.querySelectorAll("[data-a='home-img']");
    // const locationT = document.querySelector('.time_text')
    const heroText = new SplitType(homeT, { types: 'words, chars, lines'  })
    const heroWorkText = new SplitType(workText, { types: 'words, chars, lines'  })
    const heroSocialText = new SplitType(socialL, { types: 'words, chars, lines'  })
    // const linkWrap = [...document.querySelectorAll('.case_study_link')]




      // gsap.to(heroText.lines, {
      //   y: '-120%',
      //   ease: 'expo.out',
      //   duration: 1.6,
      //   stagger: {
      //     each: 0.03
      //   }
      // }),

      // gsap.to(homeImg, {
      //   y: '-120%',
      //   duration: 1.8,
      //   ease: 'expo.out',
      //   stagger: {
      //     each: 0.03
      //   }
      // }),

      // gsap.to(heroSocialText.lines, {
      //   y: '-120%',
      //   duration: 1.6,
      //   ease: 'expo.out',
      //   stagger: {
      //     each: 0.03
      //   }
      // }),

      // gsap.to(heroWorkText.lines, {
      //   y: '-120%',
      //   ease: 'expo.out',
      //   duration: 1.6,
      //   stagger: {
      //     each: 0.03
      //   }
      // })



  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
  }
}