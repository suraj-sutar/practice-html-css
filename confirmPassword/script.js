document.querySelector(".btn").addEventListener("click", validPassword);

function validPassword() {
  let pass = document.querySelector(".pass").value;
  let confpass = document.querySelector(".confpass").value;
  let displayError = document.querySelector(".errorDisplay");

  if (pass === "" || confpass === "") {
    displayError.textContent = "Please Fill Both Input Filed";
    displayError.style.color = "red";
  } else if (pass !== confpass) {
    displayError.textContent = "Please Check Password";
    displayError.style.color = "red";
  } else {
    displayError.textContent = "Password Match";
    displayError.style.color = "green";
  }
}
