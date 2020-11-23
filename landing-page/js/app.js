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
function createNavItem(itemText, anchorId){

    //create navigation list element
    const navItem = document.createElement('li');
    navItem.classList.add('menu__link');
    navItem.setAttribute('data-location', anchorId);
    navItem.textContent = itemText;
    return navItem;
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
        console.log(navItem);
        docFragment.appendChild(navItem);
    });

    //append menu items to nav bar
    const navbarList = document.getElementById('navbar__list');
    navbarList.appendChild(docFragment);
}


// Add class 'active' to section when near top of viewport
function activateSection(event) {
    //TODO:
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event){
    anchorId =  event.target.getAttribute('data-location');
    section =  document.getElementById(anchorId);
    window.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: 'smooth'
    });

    //hide menu bar
    //TODO: create hide and show css classes
    event.target.parentElement.style.display = 'none';
}


/**
 * End Main Functions
 * Begin Events
 *
*/

//Assign Event Listeners
function init(){
    createNavMenu();
    menuClickListener();
    //activeSectionListener();
}

// Scroll to section on link click
function menuClickListener(){
    const navbar = document.querySelector('.navbar__menu');
    navbar.addEventListener('click', scrollToSection);
}

// Set sections as active


