const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", () => {
    headerNav.classList.toggle("nav--active");
    headerBurger.classList.toggle("burger--active");
    document.body.classList.toggle("no--scroll");
})