let name1 = document.querySelector(".application_form_name");
let number1 = document.querySelector(".application_form_number");
let message1 = document.querySelector(".application_form_appeal");
let create_button = document.querySelector(".application_form_button");
let loader = document.querySelector(".myLoader");

create_button.addEventListener("click", async () => {
  const formData = new FormData();

  let name = name1.value;
  let number = number1.value;
  let message = message1.value;
  if (!name || !number || !message) {
    return Toastify({
      text: "Ma'lumotlar to'liq to'ldirilmagan",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "darkorange",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
  loader.style.display = "flex";
  formData.append("name", name);
  formData.append("number", "+998" + number);
  formData.append("message", message);
  const option = {
    method: "post",
    body: formData,
  };

  let response = await fetch("/admin/applications", option);
  response = await response.json();
  if (response.ok) {
    loader.style.display = "none";
    name1.value = "";
    number1.value = "";
    message1.value = "";
    Toastify({
      text: "Ariza yuborildi",
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

let name2 = document.querySelector(".header_edit_modal-form_name");
let number2 = document.querySelector(".header_edit_modal-form_number");
let message2 = document.querySelector(".header_edit_modal-form_appeal");
let create_button2 = document.querySelector(".header_edit_modal-form_button");

create_button2.addEventListener("click", async () => {
  const formData = new FormData();
  let name = name2.value;
  let number = number2.value;
  let message = message2.value;
  if (!name || !number || !message) {
    return Toastify({
      text: "Ma'lumotlar to'liq to'ldirilmagan",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "darkorange",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
  loader.style.display = "flex";
  formData.append("name", name);
  formData.append("number", "+998" + number);
  formData.append("message", message);
  const option = {
    method: "post",
    body: formData,
  };

  let response = await fetch("/admin/applications", option);
  response = await response.json();
  if (response.ok) {
    loader.style.display = "none";
    name2.value = "";
    number2.value = "";
    message2.value = "";
    Toastify({
      text: "Ariza yuborildi",
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
    document
      .querySelector(".header_edit_modal")
      .classList.remove("header_edit_modal-open");
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
