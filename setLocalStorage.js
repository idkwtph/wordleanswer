const darkModeToggle = document.getElementById("dark-mode-toggle");
const alertsToggle = document.getElementById("alert-toggle");
const hintsToggle = document.getElementById("hints-toggle");

setLocalStorage();
updateLocalStorage();

function setLocalStorage() {
  if (localStorage.length === 0) {
    localStorage.setItem("dark-mode", "true");
    localStorage.setItem("alerts", "true");
    localStorage.setItem("hints", "true");
  }
}

function updateLocalStorage() {
  let alertsValue = localStorage.getItem("alerts");
  let darkModeValue = localStorage.getItem("dark-mode");
  let hintsValue = localStorage.getItem("hints");
  alertsToggle.setAttribute("isChecked", alertsValue);
  darkModeToggle.setAttribute("isChecked", darkModeValue);
  hintsToggle.setAttribute("isChecked", hintsValue);
  alerts = alertsValue === "true";
  if (darkModeValue === "false") {
    document.body.classList = "light";
    document.querySelector("nav").classList = "light-nav";
  } else {
    document.body.classList = "dark";
    document.querySelector("nav").classList = "dark-nav";
  }
  hints = hintsValue === "true";
}
