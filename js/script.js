const navMenu = document.body.querySelector(".nav-menu");

function myFunction(x) {
    x.classList.toggle("change");
    if (navMenu.style.display == "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}