const button = document.querySelector(".toggle-button");
const circle = document.querySelector(".circle");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
    button.classList.toggle('active');
    container.classList.toggle('active');
});