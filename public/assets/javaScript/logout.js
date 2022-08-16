const logout = () => {};

document.querySelector(".logOutButton").addEventListener("click", async () => {
  const option = {
    method: "get",
  };

  let response = await fetch("/admin/logout", option);
  response = await response.json();
  if (response.ok) {
    window.location.href = "/admin/login";
  }
});
