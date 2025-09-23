const allChars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "¡",
  "¢",
  "£",
  "¤",
  "¥",
  "¦",
  "§",
  "¨",
  "©",
  "ª",
  "«",
  "¬",
  "®",
  "¯",
  "°",
  "±",
  "²",
  "³",
  "´",
  "µ",
  "¶",
  "·",
  "¸",
  "¹",
  "º",
  "»",
  "¼",
  "½",
  "¾",
  "¿",
  "À",
  "Á",
  "Â",
  "Ã",
  "Ä",
  "Å",
  "Æ",
  "Ç",
  "È",
  "É",
  "Ê",
  "Ë",
  "Ì",
  "Í",
  "Î",
  "Ï",
  "Ð",
  "Ñ",
  "Ò",
  "Ó",
  "Ô",
  "Õ",
  "Ö",
  "×",
  "Ø",
  "Ù",
  "Ú",
  "Û",
  "Ü",
  "Ý",
  "Þ",
  "ß",
  "à",
  "á",
  "â",
  "ã",
  "ä",
  "å",
  "æ",
  "ç",
  "è",
  "é",
  "ê",
  "ë",
  "ì",
  "í",
  "î",
  "ï",
  "ð",
  "ñ",
  "ò",
  "ó",
  "ô",
  "õ",
  "ö",
  "÷",
  "ø",
  "ù",
  "ú",
  "û",
  "ü",
  "ý",
  "þ",
  "ÿ",
  "€",
  "‚",
  "„",
  "†",
  "‡",
  "•",
  "…",
  "‰",
  "‹",
  "›",
  "€",
  "™",
  "Š",
  "š",
  "Œ",
  "œ",
  "Ÿ",
  "Ž",
  "ž",
  "‘",
  "’",
  "“",
  "”",
  "–",
  "—",
];
//Shine button boolean
let isShining = false;

//Area de texto
let textBox = document.getElementById("text");

//Tooltip clipboard
let tooltip = document.getElementById("tooltip");

//Selectores
let caracterInput = document.getElementById("char");
let form = document.getElementById("form");
let randomCaracterBtn = document.getElementById("randomCaracterBtn");
let shineBtn = document.getElementById("shineBtn");
let fontSlider = document.getElementById("size");
let quantitySlider = document.getElementById("quantity");

//Event listeners
quantitySlider.addEventListener("input", generarPiramide);
caracterInput.addEventListener("input", generarPiramide);
quantitySlider.addEventListener("mouseup", function () {
  cuantityIndicator.style.visibility = "hidden";
});
quantitySlider.addEventListener("mousedown", function () {
  cuantityIndicator.style.visibility = "visible";
});
fontSlider.addEventListener("input", cambiarTamanioTexto);
textBox.addEventListener("click", copiarTexto);
textBox.addEventListener("mouseover", mostrarTooltip);

textBox.addEventListener("mouseout", function () {
  tooltip.style.visibility = "hidden";
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
randomCaracterBtn.addEventListener("click", caracterAleatorio);
shineBtn.addEventListener("click", function () {
  isShining = !isShining;
  if (isShining) {
    textBox.style.fontWeight = 800;
    shineBtn.style.fontWeight = 800;
    document.addEventListener("mousemove", colorAleatorio);
  } else {
    document.removeEventListener("mousemove", colorAleatorio);
    textBox.style.color = "inherit";
    shineBtn.style.color = "inherit";
    textBox.style.fontWeight = 200;
    shineBtn.style.fontWeight = 200;
    quantitySlider.style.setProperty("--slider-color", "#007bff");
    fontSlider.style.setProperty("--slider-color", "#007bff");
  }
});

generarPiramide();

function colorAleatorio() {
  let color = getRandomColor();
  textBox.style.color = color;
  shineBtn.style.color = color;
  quantitySlider.style.setProperty("--slider-color", color);
  fontSlider.style.setProperty("--slider-color", color);
}

function caracterAleatorio() {
  let randomNumber = Math.floor(Math.random() * allChars.length - 1);
  caracterInput.value = allChars[randomNumber][0];
  generarPiramide();
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cambiarTamanioTexto() {
  textBox.style.fontSize = fontSlider.value + "px";
  cuantityIndicator.style.fontSize = fontSlider.value + "px";
}

function generarPiramide() {
  //Obtener altura
  let altura = Number(quantitySlider.value);
  let char = caracterInput.value;
  //Actualizar valores
  textBox.innerText = piramide(altura, char);
  cuantityIndicator.innerHTML = altura;
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
