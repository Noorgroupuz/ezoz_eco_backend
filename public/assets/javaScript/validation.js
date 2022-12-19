let number_input = document.querySelector(".application_form_number");
let number_input2 = document.querySelector(".header_edit_modal-form_number");
let oldValue = "";
let oldValue2 = "";
if (number_input) {
  number_input.addEventListener("input", (e) => {
    if (e.data !== "e" && oldValue.length < 9) {
      oldValue = e.target.value;
      number_input.value = oldValue;
    }
    if (oldValue.length >= 9 && e.data !== null) {
      number_input.value = oldValue;
    } else {
      oldValue = e.target.value;
    }
  });
}
if (number_input2) {
  number_input2.addEventListener("input", (e) => {
    if (e.data !== "e" && oldValue2.length < 9) {
      oldValue2 = e.target.value;
      number_input2.value = oldValue2;
    }
    if (oldValue2.length >= 9 && e.data !== null) {
      number_input2.value = oldValue2;
    } else {
      oldValue2 = e.target.value;
    }
  });
}
