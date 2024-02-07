document.getElementsByClassName("btn").addEventListener("click", () => {
  let pass = document.querySelector(".password").value;
  let confPass = document.querySelector(".confPassword").value;
  let errormsg = document.querySelector(".errorMsg");

  if (pass === "" || confPass === "") {
    errormsg.textContent = "Please Fill Both The Input Filed";
    console.log("Please Fill Both The Input Filed");
  } else if (pass !== confPass) {
    errormsg.textContent = "Password Do Not Match";
    console.log("Password Do Not Match");
  } else {
    errormsg.textContent = "Password Match";
    console.log("Password Match");
  }
});
