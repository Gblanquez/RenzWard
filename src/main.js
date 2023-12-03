import './styles/style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Core } from '@unseenco/taxi'
import { Renderer } from '@unseenco/taxi';
import gsap from 'gsap';
import AboutPage from './transitions/About';
import workPage from './transitions/WorkPage';
import myHome from './transitions/Home';
import workRender from './renders/WorkRender';
import homeRender from './renders/HomeRender';
import aboutRender from './renders/AboutRender';
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// import customRender from './renders/Load';

//Swiper Case Studies




//Swiper Case Studies End



//Time Location SetUp

const locations = document.querySelectorAll(".time_wrapper");

const updateTime = function () {
  locations.forEach((location) => {
    const output = location.querySelector(".time_number");

    const now = luxon.DateTime.now().setZone("Europe/London");

    output.innerHTML = now.toFormat("HH:mm:ss");
  });
};

updateTime();

setInterval(function () {
  updateTime();
}, 1000);

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



const taxi = new Core({
    renderers: {
        home: homeRender,
        work: workRender,
        about: aboutRender,
        
    },
    transitions: {
        homeTran: myHome,
        workTran: workPage,
        aboutTran: AboutPage
    }
})




