let hamburger = document.querySelector(".nav-bar");

function openMenu() {
    console.log("open!");

    hamburger.style.width = "90%";
    hamburger.style.opacity = "1";
}

function closeMenu() {
    hamburger.style.width = "0%";
    hamburger.style.opacity = "0";
}
