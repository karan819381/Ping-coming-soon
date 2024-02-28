const input = document.querySelector(".email-input");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");

btn.addEventListener("click", function () {
  const inputValue = input.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(inputValue)) {
    input.style.borderColor = "red";
    error.style.display = "block";
  } else {
    input.style.borderColor = "green";
    error.style.display = "none";
  }
});
