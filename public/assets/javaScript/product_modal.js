let productes = document.querySelectorAll(".product");
let productModals = document.querySelectorAll(".product_modal");
let productModalClosers = document.querySelectorAll(".product-modal-closer");
productes.forEach((product, index) => {
  product.addEventListener("click", () => {
    productModals[index].classList.add("product_modal-open");
  });
});
productModalClosers.forEach((productModalCloser, index) => {
  productModalCloser.addEventListener("click", () => {
    productModals[index].classList.remove("product_modal-open");
  });
});
