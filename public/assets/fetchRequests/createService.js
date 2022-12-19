let service_title_ru1 = document.querySelector(".service_title_ru");
let service_title_uz1 = document.querySelector(".service_title_uz");
let service_banner_image1 = document.querySelector(".service_banner_image");
let service_product_image1 = document.querySelector(".service_product_image");
let service_button = document.querySelector(".service_button");
let loader = document.querySelector(".myLoader");
let editor1;
let editor2;
DecoupledEditor.create(document.querySelector("#myTextarea10"))
  .then((editor) => {
    editor1 = editor;
    const toolbarContainer = document.querySelector("#toolbar-container1");
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
  })
  .catch((error) => {
    console.error(error);
  });
DecoupledEditor.create(document.querySelector("#myTextarea11"))
.then((editor) => {
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
  let service_banner_image = service_banner_image1.files[0];
  let service_product_image = service_product_image1.files[0];

  if (
    !service_title_ru ||
    !service_title_uz ||
    !service_text_ru ||
    !service_text_uz ||
    !service_product_image ||
    !service_banner_image
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("service_title_ru", service_title_ru);
  formData.append("service_title_uz", service_title_uz);
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
