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

//Area de texto
let textBox = document.getElementById("text");
let cuantityIndicator = document.getElementById("quantity-indicator");

//Tooltip clipboard
let tooltip = document.getElementById("tooltip");

//Selectores
let caracterInput = document.getElementById("char");
let quantityInput = document.getElementById("quantity");
let form = document.getElementById("form");
let randomBtn = document.getElementById("randomCaracterBtn");
let fontSlider = document.getElementById("size");
let quantitySlider = document.getElementById("quantity");

//Event listeners
quantitySlider.addEventListener("input", generarPiramide);
caracterInput.addEventListener("input", generarPiramide);
quantitySlider.addEventListener("mouseup", function () { cuantityIndicator.style.visibility = "hidden"; });
quantitySlider.addEventListener("mousedown", function () { cuantityIndicator.style.visibility = "visible"; });
fontSlider.addEventListener("input", cambiarTamanioTexto);
textBox.addEventListener("click", copiarTexto);
textBox.addEventListener("mouseover", mostrarTooltip);
textBox.addEventListener("mouseout", function () { tooltip.style.visibility = "hidden"; });
form.addEventListener("submit", function (event) { event.preventDefault();});
randomBtn.addEventListener("click", caracterAleatorio);

generarPiramide();

function caracterAleatorio() {
  let randomNumber = Math.floor(Math.random() * allChars.length -1);
  caracterInput.value = allChars[randomNumber][0];
  generarPiramide();
}

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
