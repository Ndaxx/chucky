document.addEventListener("DOMContentLoaded", () => {
let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let img = document.getElementById("imgg");
let angulo = 0;

const checkButton = (button) => {
    if (button === derecha) {
        izquierda.classList.add("gray");
        izquierda.classList.remove("green");
        derecha.classList.add("green");
        derecha.classList.remove("gray")
    }else if (button === izquierda) {
        izquierda.classList.add("green");
        izquierda.classList.remove("gray");
        derecha.classList.add("gray");
        derecha.classList.remove("green")
    }
};

const checkAngle = () => {
    if (angulo == 0) {
        izquierda.classList.remove("green");
        izquierda.classList.add("gray");
        derecha.classList.remove("green");
        derecha.classList.add("gray");
    }
};

izquierda.addEventListener("click", () => {
    angulo += 5;
    img.style.transform = `rotate(${angulo}deg)`;
    checkButton(izquierda);
    checkAngle();
    console.log("se está ejecutando");
});

derecha.addEventListener("click", () => {
    angulo -= 5;
    img.style.transform = `rotate(${angulo}deg)`;
    checkButton(derecha);
    checkAngle();
    console.log("se está ejecutando");
});

checkAngle();

});







/*const rotarImagen = (img) => {
        const currentRotation = getComputedStyle(img).transform;
        const currentAngle = parseFloat(currentRotation.match(/-?[\d\.]+/)[0]);
        const newAngle = currentAngle - 15; // Restamos 15 grados

        imagen.style.transform = `rotate(${newAngle}deg)`;
}; 
izquierda.addEventListener("click", () => {
    rotarImagen(img); 
});*/
