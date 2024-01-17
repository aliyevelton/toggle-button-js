const button = document.querySelector(".toggle-button");
const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
const radio_container = document.querySelector(".radio_circle");
const radio_label = document.querySelector(".radio_label");

radio_label.addEventListener("click", radioHandler);

function radioHandler() {
    radio_container.classList.toggle('active');
    button.classList.toggle('active');
    container.classList.toggle('active');
};


button.addEventListener("click", buttonHandler);

function buttonHandler() {
    radio_container.classList.toggle('active');
    button.classList.toggle('active');
    container.classList.toggle('active');
};

