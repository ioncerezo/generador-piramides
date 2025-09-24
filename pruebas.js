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
// Shine button boolean
let isShining = false;

// Área de texto
const textBox = document.getElementById("text");

// Tooltip clipboard
const tooltip = document.getElementById("tooltip");

// Selectores
const caracterInput = document.getElementById("char");
const form = document.getElementById("form");
const randomCaracterBtn = document.getElementById("randomCaracterBtn");
const shineBtn = document.getElementById("shineBtn");
const fontSlider = document.getElementById("size");
const quantitySlider = document.getElementById("quantity");
const quantityIndicator = document.getElementById("quantity-indicator");

// Event listeners
quantitySlider.addEventListener("input", generarPiramide);
caracterInput.addEventListener("input", generarPiramide);

quantitySlider.addEventListener("mouseup", function () {
  quantityIndicator.style.visibility = "hidden";
});
quantitySlider.addEventListener("mousedown", function () {
  quantityIndicator.style.visibility = "visible";
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
  const color = getRandomColor();
  textBox.style.color = color;
  shineBtn.style.color = color;
  quantitySlider.style.setProperty("--slider-color", color);
  fontSlider.style.setProperty("--slider-color", color);
}

function caracterAleatorio() {
  const randomNumber = Math.floor(Math.random() * allChars.length);
  caracterInput.value = allChars[randomNumber][0];
  generarPiramide();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cambiarTamanioTexto() {
  textBox.style.fontSize = fontSlider.value + "px";
  quantityIndicator.style.fontSize = fontSlider.value + "px";
}

function generarPiramide() {
  // Obtener altura
  const altura = Number(quantitySlider.value);
  const char = caracterInput.value;
  // Actualizar valores
  textBox.textContent = piramide(altura, char);
  quantityIndicator.textContent = altura;
  tooltip.textContent = "Click para copiar!";
}

function piramide(i, char) {
  let piramideString = "";
  let altura = Number(i);
  let ladrillo = 1;
  let espacio = altura - 1;

  for (let i = 0; i < altura; i++) {
    // Dibuja los primeros huecos
    for (let y = 0; y < espacio; y++) {
      piramideString += "\xa0";
    }
    // Dibuja los ladrillos
    for (let y = 0; y < ladrillo; y++) {
      piramideString += char;
    }
    // Dibuja el espacio sobrante
    for (let y = 0; y < espacio; y++) {
      piramideString += "\xa0";
    }
    espacio -= 1;
    ladrillo += 2;
    piramideString += "\n";
  }
  return piramideString;
}

function copiarTexto() {
  navigator.clipboard.writeText(textBox.textContent);
  mostrarTooltip();
  tooltip.textContent = "Texto copiado!";
  textBox.focus();
}

function mostrarTooltip() {
  tooltip.style.visibility = "visible";
  setTimeout(() => {
    tooltip.style.visibility = "hidden";
  }, 2000);
}
