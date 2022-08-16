const languageSelection = document.querySelector("#language");
languageSelection.addEventListener("change", (e) => {
  document.cookie = `language=${e.target.value}; path=/`;
  location.reload();
});
const languageSelection1 = document.querySelector("#language1");
languageSelection1.addEventListener("change", (e) => {
  document.cookie = `language=${e.target.value}; path=/`;
  location.reload();
});
