let service_title_ru1 = document.querySelector(".service_title_ru");
let service_title_uz1 = document.querySelector(".service_title_uz");
let service_text_ru1 = document.querySelector(".service_text_ru");
let service_text_uz1 = document.querySelector(".service_text_uz");
let service_banner_image1 = document.querySelector(".service_banner_image");
let service_product_image1 = document.querySelector(".service_product_image");
let service_button = document.querySelector(".service_button");
let edit = document.querySelector(".edit");
let img1 = ""; 
let img2 = "";

let btn_banner_close = document.querySelector(".btn-banner-close");
let btn_product_close = document.querySelector(".btn-product-close");
let btn_close = document.querySelector(".btn-close");
let bannerImg = document.querySelector(".bannerImg");
let productImg = document.querySelector(".productImg");

let loader = document.querySelector(".myLoader");

const serviceBox = document.querySelector(".editServiceBox");
let service = serviceBox.dataset.service_date;
service = JSON.parse(service);
service_title_ru1.value = service.service_title_ru;
service_title_uz1.value = service.service_title_uz;
// service_text_ru1.value = service.service_text_ru;
// service_text_uz1.value = service.service_text_uz;
// setTimeout(() => {
//   tinymce.get("myTextarea10").setContent(service.service_text_ru);
//   tinymce.get("myTextarea11").setContent(service.service_text_uz);
// }, 1000);
bannerImg.src = "/files/" + service.service_banner_image;
productImg.src = "/files/" + service.service_product_image;

btn_banner_close.addEventListener("click", () => {
  document.querySelector(".bannerWrapper").remove();
  img1 = service.service_banner_image;
  service.service_banner_image = "";
});
btn_product_close.addEventListener("click", () => {
  document.querySelector(".productWrapper").remove();
  img2 = service.service_product_image;
  service.service_product_image = "";
});

let editor1;
let editor2;
DecoupledEditor.create(document.querySelector("#myTextarea10"))
  .then((editor) => {
    editor.setData(service.service_text_ru);
    editor1 = editor;
    const toolbarContainer = document.querySelector("#toolbar-container1");
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
  })
  .catch((error) => {
    console.error(error);
  });
DecoupledEditor.create(document.querySelector("#myTextarea11"))
  .then((editor) => {
    editor.setData(service.service_text_uz);
    editor2 = editor;
    const toolbarContainer = document.querySelector("#toolbar-container2");
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
  })
  .catch((error) => {
    console.error(error);
  });
service_button.addEventListener("click", async () => {
  const formData = new FormData();

  let service_title_ru = service_title_ru1.value;
  let service_title_uz = service_title_uz1.value;
  let service_text_ru = editor1.getData();
  let service_text_uz = editor2.getData();
  if (!service_title_ru || !service_title_uz || !service_text_ru || !service_text_uz || !(service.service_banner_image || service_banner_image1.files[0]) || !(service.service_product_image || service_product_image1.files[0])) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("service_title_ru", service_title_ru);
  formData.append("service_title_uz", service_title_uz);
  formData.append("service_text_ru", service_text_ru);
  formData.append("service_text_uz", service_text_uz);
  if (service_banner_image1.files[0]) {
    formData.append("bannerImage", service_banner_image1.files[0]);
  }
  if (service_product_image1.files[0]) {
    formData.append("productImage", service_product_image1.files[0]);
  }
  if (img1) {
    formData.append("oldBannerImage", img1);
  }
  if (img2) {
    formData.append("oldProductImage", img2);
  }
  const option = {
    method: "put",
    body: formData,
  };

  let response = await fetch(`/admin/service/${service.service_id}`, option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/services";
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
