// Select all the slides
let slides = document.querySelectorAll(".swiper-second-slide");
let navMenu = document.querySelector(".menu")



let navBtn = document.querySelector("#nav-btn").addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");

    } else {
        navMenu.classList.add("active");

    }
})


// Loop through each slide
slides.forEach((slide) => {
    let dropBtn = slide.querySelector(".drop-btn"); // Find the button within the slide
    let overlay = slide.querySelector(".overlay"); // Find the overlay within the slide
    let dropArrow = slide.querySelector(".drop-arrow"); // Find the arrow within the slide

    // Add click event listener to the button
    dropBtn.addEventListener("click", () => {
        // Toggle the active class on the overlay and update the arrow
        if (overlay.classList.contains("active")) {
            overlay.classList.remove("active");
            dropArrow.classList.remove("bxs-down-arrow");
            dropArrow.classList.add("bxs-up-arrow");
        } else {
            overlay.classList.add("active");
            dropArrow.classList.remove("bxs-up-arrow");
            dropArrow.classList.add("bxs-down-arrow");
        }
    });
});

// SLIDER ONE


const swiper = new Swiper(".slider-wrapper", {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// SLIDER ONE


// SLIDER TWO


document.addEventListener('DOMContentLoaded', () => {
    const secondSlider = new Swiper('.swiper-second', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,



        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// SLIDER TWO