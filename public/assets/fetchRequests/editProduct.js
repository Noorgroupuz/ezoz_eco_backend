let product_title_ru = document.querySelector(".product_title_ru");
let product_title_uz = document.querySelector(".product_title_uz");
let product_description_ru = document.querySelector(".product_description_ru");
let product_description_uz = document.querySelector(".product_description_uz");
let product_image = document.querySelector(".product_image");
let product_button = document.querySelector(".product_button");
let edit = document.querySelector(".edit");

let btn_close = document.querySelector(".btn-close");
let productImg = document.querySelector(".productImg");

let loader = document.querySelector(".myLoader");

const productBox = document.querySelector(".editProductBox");
let product = productBox.dataset.product_date;
product = JSON.parse(product);
console.log(product);
product_title_ru.value = product.product_title_ru;
product_title_uz.value = product.product_title_uz;
product_description_ru.value = product.product_description_ru;
product_description_uz.value = product.product_description_uz;
productImg.src = "/files/" + product.product_image;

btn_close.addEventListener("click", () => {
  document.querySelector(".imgWrapper").remove();
  productImg.remove();
});
product_button.addEventListener("click", async () => {
  const formData = new FormData();

  product_title_ru = product_title_ru.value;
  product_title_uz = product_title_uz.value;
  product_description_ru = product_description_ru.value;
  product_description_uz = product_description_uz.value;
  if (
    !product_title_ru ||
    !product_title_uz ||
    !product_description_ru ||
    !product_description_uz ||
    !(product.product_image || product_image.files[0])
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("product_title_ru", product_title_ru);
  formData.append("product_title_uz", product_title_uz);
  formData.append("product_description_ru", product_description_ru);
  formData.append("product_description_uz", product_description_uz);
  if (product_image.files[0]) {
    formData.append("image", product_image.files[0]);
  }
  if (product.product_image) {
    formData.append("oldImage", product.product_image);
  }
  // console.log(product_image.files[0]);
  // console.log(product.product_image);
  const option = {
    method: "put",
    body: formData,
  };

  let response = await fetch(`/admin/product/${product.product_id}`, option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/productes";
    loader.style.display = "none";
    Toastify({
      text: "Product is updated",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#198754",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    Toastify({
      text: response.msg,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#fd7e14",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    loader.style.display = "none";
  }
});
