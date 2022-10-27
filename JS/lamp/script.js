const btn = document.getElementById("btn");
let lamp = document.getElementById("lamp");
const message = document.getElementById("message");
lamp.addEventListener("mouseover", TurnOn);
lamp.addEventListener("mouseleave", TurnOff);
lamp.addEventListener("dblclick", LampBronken);

btn.addEventListener("click", Default);

function isBroken() {
  // forma de verificar se há a imagem onde eu quero ver,
  // se não tiver ele vai retorna um -1
  return lamp.src.indexOf("quebrada") > -1;
}
function LampBronken() {
  lamp.src = "./imgs/quebrada.png";
}
console.log(LampBronken);

function Default() {
  if (lamp.src.indexOf("off") > -1) {
    TurnOn();
    btn.textContent = "Desligar";
  } else {
    TurnOff();
    btn.textContent = "Ligar";
  }
}
function TurnOn() {
  if (!isBroken()) {
    lamp.src = "./imgs/on.png";
  } else {
    message.textContent = "Reload the page to concert this lamp";
  }
}
function TurnOff() {
  if (!isBroken()) {
    lamp.src = "./imgs/off.png";
  } else {
    message.textContent = "Reload the page to concert this lamp";
  }
}
