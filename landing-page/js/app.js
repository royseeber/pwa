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
function activateSection(event) {
    sections = document.querySelectorAll('section');
    sections.forEach(element => {
        if (nearTop(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        };
    });
}

// Scroll to anchor ID
function scrollToSection() {
    //using css html element scroll-behavior: smooth - no javascript required

    //hide menu bar after a  menu item is clicked
    const navbarList = document.querySelector('.navbar__menu');
    navbarList.style.display = 'none';
}


/**
 * End Main Functions
 * Begin Events
 *  *
 * */

//Build Menu
createNavMenu();

//Scroll to section on link click
const navbar = document.querySelector('.navbar__menu');
navbar.addEventListener('click', scrollToSection);

// Set sections as active
window.addEventListener('scroll', (event) => {
    setTimeout((event) => {
        activateSection(event);
    }, 500);
});
