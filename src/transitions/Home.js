import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


gsap.registerPlugin( ScrollTrigger);

export default class myHome extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    // do something ...
    done()
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    // do something else ...
    $('.slider_main_wrapper').each(function (index) {
        const swiper = new Swiper($(this).find('.swiper')[0], {
            slidesPerView: 'auto',
            mousewheel: {
                invert: true,
                // sensitivity: 1,
                
            },
            speed: 800,
            keyboard: true,
            centeredSlides: true,
            loop: true,
            followFinger: true,
            
    
        });
    });


    console.log('hey it worked')
    done()
  }
}