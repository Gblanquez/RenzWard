import { Renderer } from '@unseenco/taxi';
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
gsap.registerPlugin( ScrollTrigger);


export default class homeRender extends Renderer {
  initialLoad() {
    console.log('its loading');
  }


  onEnter() {
    // run after the new content has been added to the Taxi container
    
  }

  onEnterCompleted() {
     // run after the transition.onEnter has fully completed
    //  $('.slider_main_wrapper').each(function (index) {
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
  }

  onLeave() {
    // run before the transition.onLeave method is called
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
  }
}