/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

// variables used to control showing and hiding of menu
let prevScrollPos = 0;
let prevScrollDown = true;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// create navigation link
function createNavItem(itemText, anchorId){
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.classList.add('menu__link');
    navLink.setAttribute('href', '#' + anchorId);
    navLink.textContent = itemText;
    navItem.appendChild(navLink);
    return navItem;
}

// check if an element is near the top of viewport
function nearTop(element){
    const rect = element.getBoundingClientRect();
    return (rect.top < 50);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function createNavMenu(){

    //generate menu items using page section info
    const docFragment = document.createDocumentFragment();
    const menuItems = document.querySelectorAll('[data-nav]')
    menuItems.forEach(element => {
        const itemText = element.getAttribute('data-nav');
        const anchorId = element.getAttribute('id');
        const navItem = createNavItem(itemText, anchorId);
        docFragment.appendChild(navItem);
    });

    //append menu items to nav bar
    const navbarList = document.getElementById('navbar__list');
    navbarList.appendChild(docFragment);
}

// Add class 'active' to section when near top of viewport
function activateSection() {
    sections = document.querySelectorAll('section');
    sections.forEach(element => {
        if (nearTop(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        };
    });
}

// Scroll to section using ScrollTo method
function scrollToSection(event) {

    /* Scroll to section pertaining to clicked menu item
    - Note: could create same effect with css html scroll-behavior: smooth */

    event.preventDefault();
    sectionId = event.target.getAttribute('href').substring(1);
    section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: 'smooth'
      });

    //hide menu bar after a  menu item is clicked
    const menu = document.querySelector('.navbar__menu');
    menu.classList.add('hide');
}

//show menu if user scrolls up and hide menu if user scrolls down
function toggleMenu(){
    const menu = document.querySelector('.navbar__menu');
    const curScrollPos = window.scrollY;

    /* Only show menu if current scroll direction is up and previous scroll direction was down
     - this prevents displaying menu in response to a menu generated scroll up event */
    if (curScrollPos < prevScrollPos && prevScrollDown) {
        menu.classList.remove('hide');
        prevScrollDown = false;

    // hide menu if user scrolls down
    } else if (curScrollPos > prevScrollPos) {
        menu.classList.add('hide');
        prevScrollDown = true;
    }

    prevScrollPos = curScrollPos;
}

/**
 * End Main Functions
 * Begin Events
 *  *
 * */

 // build navigation menu
createNavMenu();

//Scroll to section on link click
const navbar = document.querySelector('.navbar__menu');
navbar.addEventListener('click', scrollToSection);

/* scroll event to activate section
 - only allow one event handler to run at any given time */
let activateTimerOn = false;
window.addEventListener('scroll', () => {
    if (!activateTimerOn) {
        activateTimerOn = true;
        setTimeout(() => {
            activateSection();
            activateTimerOn = false;
        }, 300);
    }
}, {passive: true});

/* scroll event to toggle menu
 - only allow one event handler to run at any given time */
let menuTimerOn = false;
window.addEventListener('scroll', () => {
    if (!menuTimerOn) {
        menuTimerOn = true;
        setTimeout(() => {
            toggleMenu();
            menuTimerOn = false;
        }, 300);
    }
}, {passive: true});





