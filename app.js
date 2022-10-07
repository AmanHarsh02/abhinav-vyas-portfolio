const dynamicText = document.querySelector("#dynamic-text");
const menuBtn = document.querySelector("#menu-btn");

var typed = new Typed(dynamicText, {
    strings: ['a UX Designer', '<span class="red-color-span">an Interaction Designer</span>', '<span class="green-color-span">a Transcendental Meditator</span>', '<span class="yellow-color-span">a Good Observer!</span>', "a Student for Life"],
    typeSpeed: 80,
    backSpeed: 40,
    showCursor: false,
    backDelay: 1000,
    loop: true
}
);

function menuBtnClickHandler(event) {
    if(event.target != menuBtn) {
        menuBtn.checked = false;
    }
}

window.addEventListener("click", menuBtnClickHandler);