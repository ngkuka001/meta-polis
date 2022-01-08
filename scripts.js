const toggleCartBox = () => {
  const cartBox = document.querySelector(".cart-box");
  const btnCart = document.querySelector(".my-cart");
  cartBox.classList.toggle("hide");
  btnCart.classList.toggle("hide");
};

const allBtnAddCart = document.querySelectorAll(".btn-add-to-cart");
allBtnAddCart.forEach((button) => {
  button.addEventListener("click", (event) => {
    const thisButton = event.target;
    thisButton.innerText = thisButton.classList.contains("added-cart")
      ? "add to cart"
      : "remove from cart";
    thisButton.classList.toggle("added-cart");
  });
});

// document
//   .querySelectorAll(".btn-add-to-cart")
//   .addEventListener("click", (event) => {
//     const thisButton = event.target;
//     thisButton.innerText = thisButton.classList.contains("added-cart")
//       ? "add to cart"
//       : "remove from cart";
//     thisButton.classList.toggle("added-cart");
//   });
