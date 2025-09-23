//Area de texto
let textBox = document.getElementById("text");
let cuantityIndicator = document.getElementById("quantity-indicator");

//Tooltip clipboard
let tooltip = document.getElementById("tooltip");

//Selector ladrillo (caracter)

let caracterInput = document.getElementById("char");

//Botones
let quantityInput = document.getElementById("quantity");
let generarBtn = document.getElementById("generarBtn");
let resetBtn = document.getElementById("resetBtn");

//Slider
let fontSlider = document.getElementById("size");
let quantitySlider = document.getElementById("quantity");

//Event listeners
quantitySlider.addEventListener("input", generarPiramide);
caracterInput.addEventListener("input", generarPiramide);
quantitySlider.addEventListener("mouseup", function () {
  cuantityIndicator.style.visibility = "hidden";
});
fontSlider.addEventListener("input", cambiarTamanioTexto);
textBox.addEventListener("click", copiarTexto);
textBox.addEventListener("mouseover", mostrarTooltip);
textBox.addEventListener("mouseout", function () {
  tooltip.style.visibility = "hidden";
});


generarPiramide();

function cambiarTamanioTexto() {
  textBox.style.fontSize = fontSlider.value + "px";
  cuantityIndicator.style.fontSize = fontSlider.value + "px";
}

function generarPiramide() {
  //Obtener altura
  let altura = Number(quantityInput.value);
  let char = caracterInput.value;
  //Actualizar valores
  textBox.innerText = piramide(altura, char);
  cuantityIndicator.innerHTML = altura;
  cuantityIndicator.style.visibility = "visible";
  tooltip.innerText = "Click para copiar!";
}

function piramide(i, char) {
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
      piramideString += char;
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

function copiarTexto() {
  navigator.clipboard.writeText(textBox.innerText);
  mostrarTooltip();
  tooltip.innerText = "Texto copiado!";
}

function mostrarTooltip() {
  tooltip.style.visibility = "visible";
  setTimeout(() => {
    tooltip.style.visibility = "hidden";
  }, 2000);
}
