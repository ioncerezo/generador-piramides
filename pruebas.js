//Area de texto
let textBox = document.getElementById("text");
let cuantityIndicator = document.getElementById("quantity-indicator");


//Botones
let quantityInput = document.getElementById("quantity");
let generarBtn = document.getElementById("generarBtn");
let resetBtn = document.getElementById("resetBtn");

//Slider
let fontSlider = document.getElementById("size");
let quantitySlider = document.getElementById("quantity");


//Event listeners
quantitySlider.addEventListener("input", generarPiramide);
fontSlider.addEventListener("input", cambiarTamanioTexto);

generarPiramide();

function cambiarTamanioTexto() {
  console.log(fontSlider.value);
  textBox.style.fontSize = fontSlider.value + "px";
  cuantityIndicator.style.fontSize = fontSlider.value + "px";
}


function generarPiramide() {
  let altura = Number(quantityInput.value);
  textBox.innerText = piramide(altura);
}

function piramide(i) {
  let piramideString = "";

  let altura = Number(i);

  let ladrillo = 1;
  let espacio = altura - 1;
  for (let i = 0; i < altura; i++) {
    //Dibuja los primeros huecos
    for (let y = 0; y < espacio; y++) {
      piramideString += "\xa0"; //codigo de la tecla espacio
    }

    //Dibuja los ladrillos
    for (let y = 0; y < ladrillo; y++) {
      piramideString += "*";
    }

    //Dibuja el espacio sobrante
    for (let y = 0; y < espacio; y++) {
      piramideString += "\xa0"; //codigo de la tecla espacio
    }

    espacio -= 1;
    ladrillo += 2;
    piramideString += "\n";
  }

  return piramideString;
}
