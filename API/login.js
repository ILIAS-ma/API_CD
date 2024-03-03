const form = document.getElementById("formulaire");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");

  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let errorItem = document.createElement("li");
    errorItem.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(errorItem);
  } else {
    email.classList.add("success");
  }

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let errorItem = document.createElement("li");
    errorItem.innerText = "Le champ doit contenir au moins 6 caractères";

    errorList.appendChild(errorItem);
  } else {
    pseudo.classList.add("success");
  }

  let password = document.querySelector("#password");

  let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{10,}$/;

  if (!passCheck.test(password.value)) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let errorItem = document.createElement("li");
    errorItem.innerText =
      "Le mot de passe doit contenir au moins 10 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial";

    errorList.appendChild(errorItem);
  } else {
    password.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  let passwordRepeat = document.querySelector("#passwordRepeat");

  if (
    pseudo.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    password.value === passwordRepeat.value
  ) {
    successContainer.classList.add("visible");
  }
});