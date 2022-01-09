const toggleCartBox = () => {
    const cartBox = document.querySelector(".cart-box");
    const btnCart = document.querySelector(".btn--my-cart");
    cartBox.classList.toggle("hide");
    btnCart.classList.toggle("hide");
};

const allBtnAddCart = document.querySelectorAll(".btn-add-to-cart");
allBtnAddCart.forEach((button) => {
    button.addEventListener("click", (event) => {
        const thisButton = event.target;
        thisButton.innerText = thisButton.classList.contains("btn--added-cart") ?
            "add to cart" :
            "remove from cart";
        thisButton.classList.toggle("btn--added-cart");
    });
});

const openNav = () => {
    document.getElementById("menu-sidebar").style.width = "300px";
};

const closeNav = () => {
    document.getElementById("menu-sidebar").style.width = "0";
};