const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//create calculate function for button click

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    //output equal to % that  replace with /100 before evaluating.

    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //first convert the output into string then remove the last element using slice
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return nothing
    if (output === "" && specialChars.includes(btnValue)) return;
    // here we use concate
    output += btnValue;
  }
  display.value = output;
};

//add event listner to buttons and callback calculate() when click button
buttons.forEach((button) => {
  button.addEventListener("click", (element) => {
    calculate(element.target.dataset.value);
  });
});
