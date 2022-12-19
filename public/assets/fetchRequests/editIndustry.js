let industry_title_ru1 = document.querySelector(".industry_title_ru");
let industry_title_uz1 = document.querySelector(".industry_title_uz");
let industry_image = document.querySelector(".industry_image");
let industry_button = document.querySelector(".industry_button");
let edit = document.querySelector(".edit");
let img = "";

let btn_close = document.querySelector(".btn-close");
let industryImg = document.querySelector(".industryImg");

let loader = document.querySelector(".myLoader");

const industryBox = document.querySelector(".editIndustryBox");
let industry = industryBox.dataset.industry_date;
industry = JSON.parse(industry);
industry_title_ru1.value = industry.industry_title_ru;
industry_title_uz1.value = industry.industry_title_uz;
industryImg.src = "/files/" + industry.industry_image;

btn_close.addEventListener("click", () => {
  document.querySelector(".imgWrapper").remove();
  // industryImg.remove();
  img = industry.industry_image;
  industry.industry_image = "";
  // industryImg.src = "";
});
industry_button.addEventListener("click", async () => {
  const formData = new FormData();

  let industry_title_ru = industry_title_ru1.value;
  let industry_title_uz = industry_title_uz1.value;
  if (
    !industry_title_ru ||
    !industry_title_uz ||
    !(industry.industry_image || industry_image.files[0])
  ) {
    return alert("Iltimos malumotlarni to'ldiring");
  }
  loader.style.display = "flex";
  formData.append("industry_title_ru", industry_title_ru);
  formData.append("industry_title_uz", industry_title_uz);
  if (industry_image.files[0]) {
    formData.append("image", industry_image.files[0]);
  }
  if (img) {
    formData.append("oldImage", img);
  }
  const option = {
    method: "put",
    body: formData,
  };

  let response = await fetch(`/admin/industry/${industry.industry_id}`, option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/industries";
    loader.style.display = "none";
    Toastify({
      text: "Industry is updated",
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
