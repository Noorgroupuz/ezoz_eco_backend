const languageSelection = document.querySelector("#language");
if (languageSelection) {
  languageSelection.addEventListener("change", (e) => {
    document.cookie = `language=${e.target.value}; path=/`;
    location.reload();
  });
}
const languageSelection1 = document.querySelector("#language1");
if (languageSelection1) {
  languageSelection1.addEventListener("change", (e) => {
    document.cookie = `language=${e.target.value}; path=/`;
    location.reload();
  });
}
