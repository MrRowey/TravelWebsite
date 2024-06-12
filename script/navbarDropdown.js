function toggleMenu() {
  var navBar = document.getElementById("nav-bar");
  var menuIcon = document.getElementById("menu-icon");
  navBar.classList.toggle("active");
  if (navBar.classList.contains("active")) {
    menuIcon.innerHTML = "&#10005;"; // Close icon
  } else {
    menuIcon.innerHTML = "&#9776;"; // Hamburger icon
  }
}
