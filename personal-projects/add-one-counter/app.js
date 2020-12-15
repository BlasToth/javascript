const btn = document.getElementById("btn");
let display = document.getElementById("display");

let integer = 0;
display.textContent = integer;

function addOne() {
  integer += 1;
  display.textContent = integer;
}

btn.addEventListener("click", addOne);
