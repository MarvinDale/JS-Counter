var counter = 0;

var btn = document.querySelectorAll(".btn");

btn[0].addEventListener("click", function () {
  counter--;
  changeColor();
  document.querySelector("p").textContent = counter;
});

btn[1].addEventListener("click", function () {
  counter = 0;
  changeColor();
  document.querySelector("p").textContent = counter;
});

btn[2].addEventListener("click", function () {
  counter++;
  changeColor();
  document.querySelector("p").textContent = counter;
});

function changeColor() {
  if (counter > 0) {
    document.querySelector("p").style.color = "green";
    console.log("working");
  } else if (counter < 0) {
    document.querySelector("p").style.color = "red";
  } else {
    document.querySelector("p").style.color = "black";
  }
}
