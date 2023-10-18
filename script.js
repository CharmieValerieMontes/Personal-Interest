
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .photo-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
    });
    const handSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >=  maxScrollLeft ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handSlideButtons();
    })
  
}
window.addEventListener("load", initSlider);



// Selecting the mobile menu button
const menu = document.querySelector('#mobile_menu');

// Selecting the menu links container
const menuLinks = document.querySelector('.navbar_menu');

// Function to display or hide the mobile menu
const mobileMenu = () => {
    // Toggle the 'is-active' class on the mobile menu button
    menu.classList.toggle('is-active');

    // Toggle the 'active' class on the menu links container
    menuLinks.classList.toggle('active');
};


// Adding a click event listener to the mobile menu button
menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const breedMenu = document.querySelector('#about-breed');
    //const aboutUs = document.querySelector('#about-page')
    const aboutPhoto = document.querySelector('#about-photo');
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        breedMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutPhoto.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2345) {
        aboutPhoto.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        //aboutUs.classList.remove('highlight');
        return;
    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600 || elem)) {
        elem.classList.remove('highlight');
    }
};
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close Mobile Menu when clicking menu  item
const hideMenu = () => {
    const menuBar = document.querySelector('.is-active')
    if (window.innerWidth > 768 && menuBar)
        menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
};
menuLinks.addEventListener('click', hideMenu);
navlogo.addEventListener('click', hideMenu);



    

