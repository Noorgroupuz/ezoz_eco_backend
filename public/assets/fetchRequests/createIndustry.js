let industry_title_ru = document.querySelector(".industry_title_ru");
let industry_title_uz = document.querySelector(".industry_title_uz");
let industry_image = document.querySelector(".industry_image");
let industry_button = document.querySelector(".industry_button");
let loader = document.querySelector(".myLoader");

industry_button.addEventListener("click", async () => {
  const formData = new FormData();

  industry_title_ru = industry_title_ru.value;
  industry_title_uz = industry_title_uz.value;
  industry_image = industry_image.files[0];
  if (
    !industry_title_ru ||
    !industry_title_uz ||
    !industry_image
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("industry_title_ru", industry_title_ru);
  formData.append("industry_title_uz", industry_title_uz);
  formData.append("image", industry_image);
  const option = {
    method: "post",
    body: formData,
  };

  let response = await fetch("/admin/industries", option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/industries";
    loader.style.display = "none";
    Toastify({
      text: "Industry is created",
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
