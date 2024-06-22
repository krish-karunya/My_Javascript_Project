// alert("Hai Janani");

var settingsMenu = document.querySelector(".setting-menu");

function settingMenuToggle() {
  //   console.log(settingsMenu);
  settingsMenu.classList.toggle("setting-menu-height");
}

var dark_Button = document.getElementById("dark-btn");

// console.log(dark_Button);

dark_Button.onclick = function () {
  dark_Button.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  }
};

// Setting up local storage for themes :

if (localStorage.getItem("theme") == "light") {
  dark_Button.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  dark_Button.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

localStorage.setItem("theme", "light");
console.log(localStorage.getItem("theme"));
