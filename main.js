const password = document.getElementById("password");
const paragraph = document.getElementById("strength");
const span = document.getElementById("power");
const eyeButton = document.getElementById("view");
const eyeIcon = document.querySelector(".material-symbols-outlined");

function check() {
  if (password.value.length > 0) {
    paragraph.style.display = "block";
    eyeButton.style.display = "block"
  } else {
    paragraph.style.display = "none";
    password.style.borderColor = "white";
    eyeButton.style.display = "none"
  }

  if (password.value.length < 4 && password.value.length !== 0) {
    span.innerHTML = "Week";
    password.style.borderColor = "red";
    paragraph.style.color = "red";
  } else if (password.value.length > 4 && password.value.length < 8) {
    span.innerHTML = "Medium";
    password.style.borderColor = "yellow";
    paragraph.style.color = "yellow";
  } else if (password.value.length > 8) {
    span.innerHTML = "Strong";
    password.style.borderColor = "green";
    paragraph.style.color = "green";
  }
}

function view() {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    eyeIcon.setAttribute("title", "Hide Password");
    eyeIcon.innerHTML = "visibility";
  } else {
    password.setAttribute("type", "password");
    eyeIcon.setAttribute("title", "Show Password");
    eyeIcon.innerHTML = "visibility_off";
  }
}
