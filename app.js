const dynamicText = document.querySelector("#dynamic-text");
const menuBtn = document.querySelector("#menu-btn");
const menuItem = document.querySelectorAll(".link-nav");
const navBar = document.querySelector(".navigation");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        navBar.classList.add("nav-hidden");
    } else {
        navBar.classList.remove("nav-hidden");
    }

    lastScrollY = window.scrollY;
});

var typed = new Typed(dynamicText, {
    strings: ['a UX Designer', '<span class="red-color-span">an Interaction Designer</span>', '<span class="green-color-span">a Transcendental Meditator</span>', '<span class="yellow-color-span">a Good Observer!</span>', "a Student for Life"],
    typeSpeed: 80,
    backSpeed: 40,
    showCursor: false,
    backDelay: 1000,
    loop: true
}
);

menuItem.forEach(items => items.addEventListener("click", () => {
    menuBtn.checked = false;
}))