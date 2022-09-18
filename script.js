document.querySelector(".inputRange").addEventListener("input", updateValue);
document
  .getElementById("characterAmountNumber")
  .addEventListener("input", updateValue);

function updateValue(e) {
  var sibling = e.target.previousElementSibling || e.target.nextElementSibling;
  sibling.value = e.target.value;
}

var form = document.getElementById("passwordGeneratorForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
