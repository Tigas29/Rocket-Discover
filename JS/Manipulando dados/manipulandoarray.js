let marcas = ["samsaung", "applesan", "corola amarelo", "outra coisa aqui"];

// para acionar no ultimo elemento
marcas.push("usei o push para colocar isso aqui");

// pra acionar no primeiro elemento
marcas.unshift("usei o unshift para colocar isso aqui ");

// remover do final
marcas.pop();

//remover do começo
marcas.shift();

// pegar somente alguns elementos tem dois argumentos
// o primeiro é para saber onde quer começar
// o segundo é para saber até onde ele vai
console.log(marcas.slice(0, 2));

//remover 1 ou mais items em qualquer posição do array
// qual o index e o segundo é quantos elementos quer tirar
// a diferença pe que esse modifica o array
console.log(marcas.splice(2, 3));

// achar uma posição
let position = marcas.indexOf("css");

console.log(position);

console.log(marcas);
