let service_text_ru = document.querySelector(".service_text_ru");
let service_text_uz = document.querySelector(".service_text_uz");
let service_banner_image = document.querySelector(".service_banner_image");
let service_product_image = document.querySelector(".service_product_image");
let service_button = document.querySelector(".service_button");
let loader = document.querySelector(".myLoader");

service_button.addEventListener("click", async () => {
  const formData = new FormData();

  service_text_ru = service_text_ru.value;
  service_text_uz = service_text_uz.value;
  service_banner_image = service_banner_image.files[0];
  service_product_image = service_product_image.files[0];
  if (
    !service_text_ru ||
    !service_text_uz ||
    !service_product_image ||
    !service_banner_image
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("service_text_ru", service_text_ru);
  formData.append("service_text_uz", service_text_uz);
  formData.append("bannerImage", service_banner_image);
  formData.append("productImage", service_product_image);
  const option = {
    method: "post",
    body: formData,
  };

  let response = await fetch("/admin/services", option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/services";
    loader.style.display = "none";
    Toastify({
      text: "Service is created",
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
