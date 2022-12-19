document.querySelector(".header_two-hidder").addEventListener("click", () => {
  document.querySelector(".header_modal").classList.add("header_modal-open");
});
document
  .querySelector(".header_modal_wrapper-header-closer")
  .addEventListener("click", () => {
    document
      .querySelector(".header_modal")
      .classList.remove("header_modal-open");
  });
let stickyOne = document.querySelector(".sticky-one");
let stickyTwo = document.querySelector(".sticky-two");
let headerStarter = document.querySelector(".header-starter");
headerStarter.style.marginBottom =
  stickyOne.clientHeight + stickyTwo.clientHeight + "px";

stickyTwo.style.top = stickyOne.clientHeight + "px";
let oldHeightValue = 0;
document.addEventListener("scroll", () => {
  if (window.scrollY > stickyOne.clientHeight) {
    stickyTwo.style.top = "0";
    stickyTwo.style.transition = "0.3s";
  } else {
    stickyOne.style.top = -window.scrollY + "px";
    stickyTwo.style.transition = "0";
    stickyTwo.style.top = stickyOne.clientHeight - window.scrollY + "px";
  }
  if (window.scrollY > stickyOne.clientHeight) {
    if (window.scrollY < oldHeightValue) {
      stickyOne.style.top = "0px";
      stickyTwo.style.top = stickyOne.clientHeight + "px";
    } else {
      stickyOne.style.top = -stickyOne.clientHeight + "px";
    }
  }
  oldHeightValue = window.scrollY;
});

document
  .querySelector(".header_one_items--edit-button")
  .addEventListener("click", () => {
    document
      .querySelector(".header_edit_modal")
      .classList.add("header_edit_modal-open");
  });
document
  .querySelector(".header_one_items--edit-button2")
  .addEventListener("click", () => {
    document
      .querySelector(".header_edit_modal")
      .classList.add("header_edit_modal-open");
  });
document
  .querySelector(".header_edit_modal-top-closer")
  .addEventListener("click", () => {
    document
      .querySelector(".header_edit_modal")
      .classList.remove("header_edit_modal-open");
  });

document.addEventListener("readystatechange", () => {
  document.querySelector(".mainLoader").style.opacity = "0";
  document.querySelector(".mainLoader").style.zIndex = "-5";
  setTimeout(() => {
    document.querySelector(".mainLoader").style.display = "none";
  }, 1000);
});
