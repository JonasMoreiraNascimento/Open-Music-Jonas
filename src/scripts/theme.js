function toggleDarkMode() {
  const htmlTag = document.documentElement;
  const iconElement = document.querySelector("i.fas.fa-moon"); 

  htmlTag.classList.toggle("dark-mode");

  if (htmlTag.classList.contains("dark-mode")) {
    iconElement.classList.remove("fa-moon");
    iconElement.classList.add("fa-sun");
    iconElement.style.color = "white"; 
    localStorage.setItem("@openMusic:darkMode", "true");
  } else {
    iconElement.classList.remove("fa-sun");
    iconElement.classList.add("fa-moon");
    iconElement.style.color = "initial";
    localStorage.setItem("@openMusic:darkMode", "false");
  }
}

const moonImage = document.querySelector(".fas.fa-moon");
moonImage.addEventListener("click", toggleDarkMode); 

function loadDarkModePreference() {
  const htmlTag = document.documentElement;
  const darkModePreference = localStorage.getItem("@openMusic:darkMode");
  const iconElement = document.querySelector("i.fas.fa-moon"); 

  if (darkModePreference === "true") {
    htmlTag.classList.add("dark-mode");
    iconElement.classList.remove("fa-moon");
    iconElement.classList.add("fa-sun");
    iconElement.style.color = "white"; 
  } else {
    htmlTag.classList.remove("dark-mode");
    iconElement.classList.remove("fa-sun");
    iconElement.classList.add("fa-moon");
    iconElement.style.color = ""; 
  }
}

loadDarkModePreference();

localStorage.setItem("@openMusic:darkMode", "false");
