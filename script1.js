document.addEventListener("DOMContentLoaded", () => {
    let transparente = document.getElementById ("transparencia");

transparente.addEventListener("mouseover", () => {
    transparente.style.backgroundColor = "black";
    transparente.textContent = "Hola, soy chucky ¿quieres jugar?";
    console.log("pasó");
});




});