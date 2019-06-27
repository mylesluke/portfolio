// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuProfile = document.querySelector('.menu-profile');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.toggle('close');
        menu.classList.toggle('show');
        menuProfile.classList.toggle('show');
        menuNav.classList.toggle('show');
        navItems.forEach(item => item.classList.toggle('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.toggle('close');
        menu.classList.toggle('show');
        menuProfile.classList.toggle('show');
        menuNav.classList.toggle('show');
        navItems.forEach(item => item.classList.toggle('show'));

        showMenu = false;
    }
}