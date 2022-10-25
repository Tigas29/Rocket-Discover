const btn = document.getElementById("btn");
const acender = document.getElementById("acender");
const apagar = document.getElementById("apagar");
const zerar = document.getElementById("zerar");
let box = document.getElementById("box");
let img = document.createElement("img");

acender.addEventListener("click", () => {
  img.src =
    "https://img.freepik.com/vetores-gratis/lampada-realista-com-eletricidade_23-2149129410.jpg?w=826&t=st=1666659182~exp=1666659782~hmac=c4f5e1c930024dcc7cbf6ed56d85be873f750abe320d3a0a0a16349cbb47cff0";
  box.appendChild(img);
});

apagar.addEventListener("click", () => {
  img.src =
    "https://img.freepik.com/fotos-gratis/uma-lampada-nao-luminosa-paira-no-espaco-da-copia-de-fundo-desfocado-escuro_169016-9524.jpg?w=996&t=st=1666659277~exp=1666659877~hmac=0556734d23b16a1a0c2a2ef352999dcb5326ed955bc4b4b6050369f1fdd6859a";
  box.appendChild(img);
});

zerar.addEventListener("click", () => {
  img.src = "";
  box.appendChild(img);
});
