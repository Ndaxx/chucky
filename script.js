let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let img = document.getElementById("imgg");
let angulo = 0

/*izquierda.addEventListener("click", () => {
    angulo += 15;
    img.style.transform = `rotate(${angulo}deg)`;
    console.log("se está ejecutando");
});*/

const rotarImagen = (img) => {
        const currentRotation = getComputedStyle(img).transform;
        const currentAngle = parseFloat(currentRotation.match(/-?[\d\.]+/)[0]);
        const newAngle = currentAngle - 15; // Restamos 15 grados

        imagen.style.transform = `rotate(${newAngle}deg)`;
}; 
izquierda.addEventListener("click", () => {
    rotarImagen(img); 
});
