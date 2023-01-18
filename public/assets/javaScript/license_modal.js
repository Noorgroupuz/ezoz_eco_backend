let licenseBtns = document.querySelectorAll(".license_item_img");
let license_modal = document.querySelector(".license_modal");
let license_modal_img = document.querySelector(".license_modal_img");
let licenseModalCloser = document.querySelector(".license_modal-closer");
let licenses = [
  "/assets/images/license/ekspertiza.jpg",
  "/assets/images/license/guvohnoma.jpg",
  "/assets/images/license/sertifikat.jpg",
  "/assets/images/license/ekspertlik.jpg",
];
licenseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    license_modal_img.src = licenses[index];
    license_modal.classList.remove("license_modal-closed");
  });
});
licenseModalCloser.addEventListener("click", () => {
  license_modal_img.src = "";
  license_modal.classList.add("license_modal-closed");
});
