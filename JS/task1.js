let i = 0;
let input = document.querySelector("#counry");
let output = document.querySelector("#output");

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    show(e.target.value);
  }
});

function show(value) {
  var text = value;
  i++;
  if (i === 1) output.innerHTML = text;
  else output.innerHTML += ", " + text;
}
