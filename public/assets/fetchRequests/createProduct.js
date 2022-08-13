let product_title_ru = document.querySelector(".product_title_ru");
let product_title_uz = document.querySelector(".product_title_uz");
let product_description_ru = document.querySelector(".product_description_ru");
let product_description_uz = document.querySelector(".product_description_uz");
let product_image = document.querySelector(".product_image");
let product_button = document.querySelector(".product_button");
let loader = document.querySelector(".myLoader");

product_button.addEventListener("click", async () => {
  const formData = new FormData();

  product_title_ru = product_title_ru.value;
  product_title_uz = product_title_uz.value;
  product_description_ru = product_description_ru.value;
  product_description_uz = product_description_uz.value;
  product_image = product_image.files[0];
  if (
    !product_title_ru ||
    !product_title_uz ||
    !product_description_ru ||
    !product_description_uz ||
    !product_image
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("product_title_ru", product_title_ru);
  formData.append("product_title_uz", product_title_uz);
  formData.append("product_description_ru", product_description_ru);
  formData.append("product_description_uz", product_description_uz);
  formData.append("image", product_image);
  const option = {
    method: "post",
    body: formData,
  };

  let response = await fetch("/admin/productes", option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/productes";
    loader.style.display = "none";
    Toastify({
      text: "Product is created",
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
