let menuOpen = false;
const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".navMobile");
const links = document.getElementsByClassName("navLinkMobile");
const documentBody = document.body;

const toggleMenu = () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
    documentBody.style.overflow = "auto";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", toggleMenu);
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggleMenu);
  }
});




let submitted = false;
const inputField = document.querySelectorAll(".formInput");

function clearInputs() {
  inputField.forEach(input => input.value = null);
}

function submitForm() {
  submitted = true;
  clearInputs();
}

function resetForm() {
  window.location.reload();
}

const beforeUnloadListener = (event) => {
  if(!submitted){
    event.preventDefault();
    submitted = false;
    return event.returnValue = "Are you sure you want to exit?";
  }
};

const formInput = document.querySelector("#form");

formInput.addEventListener("input", (event) => {
  if(event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, {capture: true});
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
  }
});


