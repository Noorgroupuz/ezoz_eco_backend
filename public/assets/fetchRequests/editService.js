let service_text_ru = document.querySelector(".service_text_ru");
let service_text_uz = document.querySelector(".service_text_uz");
let service_banner_image = document.querySelector(".service_banner_image");
let service_product_image = document.querySelector(".service_product_image");
let industry_image = document.querySelector(".industry_image");
let service_button = document.querySelector(".service_button");
let edit = document.querySelector(".edit");

let btn_banner_close = document.querySelector(".btn-banner-close");
let btn_product_close = document.querySelector(".btn-product-close");
let btn_close = document.querySelector(".btn-close");
let bannerImg = document.querySelector(".bannerImg");
let productImg = document.querySelector(".productImg");

let loader = document.querySelector(".myLoader");

const serviceBox = document.querySelector(".editServiceBox");
let service = serviceBox.dataset.service_date;
service = JSON.parse(service);
service_text_ru.value = service.service_text_ru;
service_text_uz.value = service.service_text_uz;
bannerImg.src = "/files/" + service.service_banner_image;
productImg.src = "/files/" + service.service_product_image;

btn_banner_close.addEventListener("click", () => {
  document.querySelector(".bannerWrapper").remove();
  bannerImg.remove();
  service.service_banner_image = "";
});
btn_product_close.addEventListener("click", () => {
  document.querySelector(".productWrapper").remove();
  productImg.remove();
  service.service_product_image = "";
});
service_button.addEventListener("click", async () => {
  const formData = new FormData();

  service_text_ru = service_text_ru.value;
  service_text_uz = service_text_uz.value;
  console.log(service_text_ru.value);
  console.log(service_text_uz.value);
  console.log(service.service_banner_image);
  console.log(service_banner_image.files[0]);
  console.log(service.service_banner_image);
  console.log(service_product_image.files[0]);
  if (
    !service_text_ru ||
    !service_text_uz ||
    !(service.service_banner_image || service_banner_image.files[0]) ||
    !(service.service_product_image || service_product_image.files[0])
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("service_text_ru", service_text_ru);
  formData.append("service_text_uz", service_text_uz);
  if (service_banner_image.files[0]) {
    formData.append("bannerImage", service_banner_image.files[0]);
  }
  if (service_product_image.files[0]) {
    formData.append("productImage", service_product_image.files[0]);
  }
  if (service.service_banner_image) {
    formData.append("oldBannerImage", service.service_banner_image);
  }
  if (service.service_product_image) {
    formData.append("oldProductImage", service.service_product_image);
  }
  const option = {
    method: "put",
    body: formData,
  };

  let response = await fetch(`/admin/service/${service.service_id}`, option);
  response = await response.json();
  if (response.ok) {
    // window.location.href = "/admin/industries";
    loader.style.display = "none";
    Toastify({
      text: "Service is updated",
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
