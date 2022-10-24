// function Sum(A, B) {
//   console.log(A + B);
// }
function Sum(A, B) {
  let calculate = A + B;
  return calculate;
}

let number1 = 39;
let number2 = 38;
Sum(number1, number2);

console.log(`O numer 1 é ${number1} `);
console.log(`O numer 2 é ${number2} `);
console.log(`a soma é ${Sum(number1, number2)} `);

// por n ter um return, ele nao vai retornar nenhum valor e sim vai retornar um console log, pois é o que o codigo tem para ser exibido, vamos ver uma segunda opção para que possamos usar um valor ao inves de undefined
let test = () => {
  console.log("oi");
};

test();
