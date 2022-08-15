const languageSelection = document.querySelector("#language");
languageSelection.addEventListener("change", (e) => {
  document.cookie = `language=${e.target.value}`;
  console.log(e.target.value);
  // window.location.href = "/";
  location.reload();
});
const languageSelection1 = document.querySelector("#language1");
languageSelection1.addEventListener("change", (e) => {
  document.cookie = `language=${e.target.value}`;
  console.log(e.target.value);
  // window.location.href = "/";
  location.reload();
});
