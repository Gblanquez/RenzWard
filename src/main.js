import './styles/style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Core } from '@unseenco/taxi'
import { Renderer } from '@unseenco/taxi';
import './transitions/About'
import AboutPage from './transitions/About';
import workPage from './transitions/WorkPage';
import myHome from './transitions/Home';
import workRender from './renders/WorkRender';
import homeRender from './renders/HomeRender';
import aboutRender from './renders/AboutRender';
import customRender from './renders/Load';

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

//Time Location Setup End


//Page Transition Taxi Js/




const taxi = new Core({
    renderers: {
        load: customRender,
        home: homeRender,
        work: workRender,
        about: aboutRender,
        
    },
    transitions: {
        home: myHome,
        work: workPage,
        about: AboutPage
    }
})
//Page Transition Taxi Js End//

console.log('Hello')
console.log(taxi);

