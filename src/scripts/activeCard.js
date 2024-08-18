const pricingCardBtns = Array.from(document.querySelectorAll(".pricing__card__btn"));
const card = document.querySelector("pricing__card");

pricingCardBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const activeCard = document.querySelector(".pricing__card.active")
        activeCard.classList.remove("active");
        btn.closest(".pricing__card").classList.add("active");
    })
})