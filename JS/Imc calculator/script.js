const calculate = document.getElementById("calculate");

function imc() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  var result = document.getElementById("result");
  result.innerHTML = "$<span>" + result + "</span>";

  if (name !== "" && weight !== "" && height !== "") {
    const soma = weight / (height * height).toFixed(2);

    let validation = "";
    if (soma < 18.5) {
      validation = "abaixo do peso normal";
    } else if (soma < 24.9) {
      validation = "com peso normal";
    } else if (soma < 29.9) {
      validation = "com excesso de peso";
    } else if (soma < 34.9) {
      validation = "obesidade classe 1";
    } else if (soma < 39.9) {
      validation = "obesidade classe 2";
    } else {
      validation = "obesidade classe 3";
    }

    result.textContent = `${name}, your imc is ${soma}. você está 
      ${validation}`;
  } else {
    result.textContent = "please, fill all the contents with valid values";
  }

  if (soma <= 18.5) {
    validation = "abaixo do peso normal";
  } else if (soma >= 18.5 || soma <= 24.9) {
    validation = "com peso normal";
  } else if (soma >= 25 || soma <= 29.9) {
    validation = "com excesso de peso";
  } else if (soma >= 30 || soma <= 34.9) {
    validation = "obesidade classe 1";
  } else if (soma >= 35 || soma <= 39.9) {
    validation = "obesidade classe 2";
  } else {
    validation = "obesidade classe 3";
  }
  return soma;
}

calculate.addEventListener("click", imc);
