# Landing Page Project

This project uses supplied starter code for a static web page and converts the page to an interactive one.
Html and css code are supplied, but the javascript code is written entirely from scratch.
<br><br>
## Interactive Features Developed

- [Dynamically Build Navigation Menu](#navigation)
- [Show / Hide Menu Based On Scroll Direction](#Toggle-Menu)
- [Highligt Active Section Based On Scroll Position](#highlight-active-section)
<br><br>

### Navigation
Menus are build using data attributes embedded in each section element. The data attribute contains the menu text for that particular section.
When clicking a menu item the page is scrolled to the section that was selected and the menu is then hidden.
<br><br>
### Toggle Menu
Scrolling up will redisplay the menu and scrolling down will hide the menu.
Note that clicking on a menu item will change the window's scroll position. If the scroll was in an upward direction then the menu would be displayed a second time. To prevent this, a scroll up followed by another scroll up is ignored when determining if the menu will be shown. As a result, if the last menu click resulted in the scroll postion moving up, the way to get the menu back is to scroll down first before scrolling up.
<br><br>
### Highlight Active Section
As a user enters a new section while scrolling down the page, an animated bubble wil appear on the section heading and the background color will darken for the section currently being viewed. The effects are triggered when a section is near the top of the viewport.







