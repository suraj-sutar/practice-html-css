const btn = document.querySelector(".lable1");
let currMode = "light";
btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "#ebeef1";
  }
  console.log(currMode);
});
