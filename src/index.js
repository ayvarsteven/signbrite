import './assets/css/styles.css';
import nav from './components/nav/nav.html'
import './components/nav/nav.css'
import hero from './components/hero/hero.html'
import './components/hero/hero.css'
import aboutUs from './components/about-us/about-us.html'
import './components/about-us/about-us.css'
import steps from './components/steps/steps.html'
import './components/steps/steps.css'
import servicesHover from './components/services-hover/services-hover.html'
import './components/services-hover/services-hover.css'
import meetSteve from './components/meet-steve/meet-steve.html'
import './components/meet-steve/meet-steve.css'
import contactForm from './components/contact-form/contact-form.html'
import './components/contact-form/contact-form.css'
import reviews from './components/reviews/reviews.html'
import './components/reviews/reviews.css'
import footer from './components/footer/footer.html'
import './components/footer/footer.css'
import multiGallery from './components/multi-gallery/multi-gallery.html'
import './components/multi-gallery/multi-gallery.css'
import caseStudy from './components/case-study/case-study.html'
import './components/case-study/case-study.css'
import graphicServices from './components/graphic-services/graphic-services.html'
import './components/graphic-services/graphic-services.css'

const hello = 'Hello World!';
const appendedElement = document.createElement('h1');
appendedElement.textContent = hello;
document.body.appendChild(appendedElement);

document.body.innerHTML = nav + hero + aboutUs + steps + servicesHover + graphicServices + multiGallery + caseStudy + reviews + meetSteve + contactForm + footer;

// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }
                                