const toggleCartBox = () => {
    const cartBox = document.querySelector(".cart-box");
    const btnCart = document.querySelector(".btn--my-cart");
    cartBox.classList.toggle("hide");
    btnCart.classList.toggle("hide");
};

const toggleCartBoxMobile = () => {
    const cartBox = document.querySelector(".main-mobile .cart-box");
    // const btnCart = document.querySelector(".main-mobile .btn--my-cart");
    cartBox.classList.toggle("hide");
    // btnCart.classList.toggle("hide");
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
    document.getElementById("menu-sidebar-mobile").style.width = "90%";
};

const closeNav = () => {
    document.getElementById("menu-sidebar").style.width = "0";
    document.getElementById("menu-sidebar-mobile").style.width = "0";
};

const togglePropertieSidebar = () => {
    const propertieSidebar = document.querySelector(".mobile-propertie");
    const navigateIcon = document.querySelector(".nav-sidebar-arrow");
    propertieSidebar.classList.toggle("visible");
    navigateIcon.classList.toggle("visible");
};