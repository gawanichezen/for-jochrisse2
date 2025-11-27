/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== HEADER CLICKER ====================*/

// Select all navbar links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active-link'));
        // Add active class to clicked link
        link.classList.add('active-link');
    });
});



/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/
// SECTION ORDER
const sections = ["home", "about", "services", "contact"];
let currentIndex = 0;

// BUTTONS
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateButtons() {
    prevBtn.classList.toggle("hidden", currentIndex === 0);
    nextBtn.classList.toggle("hidden", currentIndex === sections.length - 1);
}

function goToSection(index) {
    const id = sections[index];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        goToSection(currentIndex);
        updateButtons();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        goToSection(currentIndex);
        updateButtons();
    }
});

// Update buttons on load
updateButtons();
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);
        
    tabContents.forEach(tabContent =>{
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) =>{
            tab.classList.remove('tab__active');
        }); 

        tab.classList.add('tab__active');
        

    });
});

/*=============== CONTACT FORM =============== */


