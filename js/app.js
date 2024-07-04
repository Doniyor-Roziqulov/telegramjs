import { DATA } from "./db.js";
const headerStatus = document.querySelector(".header__status");
const content = document.querySelector(".content");
const contentImage = document.querySelector(".content__image");
const form = document.querySelector(".form");
const input = document.querySelector(".form input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let val = input.value;

    if (val.trim() === "") return null;

    contentImage.style.display = "none";
    let date = new Date();
    let hour = date.getHours().toString().padStart(2, "0");
    let minute = date.getMinutes().toString().padStart(2, "0");

    let div = document.createElement("div");

    div.className = "message my-message";
    div.innerHTML = `
  <p>${val}</p>
  <span>${hour}:${minute}</span>
  `;
    content.appendChild(div);
    input.value = "";
    partnerSendMessage();
});

function partnerSendMessage() {
    setTimeout(() => {
        let date = new Date();
        let hour = date.getHours().toString().padStart(2, "0");
        let minute = date.getMinutes().toString().padStart(2, "0");

        let index = Math.floor(Math.random() * DATA.length);
        let div = document.createElement("div");

        div.className = "message";
        div.innerHTML = `
    <p>${DATA[index]}</p>
    <span>${hour}:${minute}</span>
    `;
        content.appendChild(div);
    }, 2000);
}
