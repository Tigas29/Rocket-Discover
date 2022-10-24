// var é gloabal.

console.log("Existem um x ? ", x);
{
  var x = 0;
}

console.log("Existem um x ? ", x);

// por ser global, o x vai ser levado para cima e declarado como undefined, mas mesmo assim ele pode ser acessado de qualquer lugar do código.

// var é local

{
  let y = 0;
  console.log("Existem um y ? ", y);

  // por ser local ele vai ser acessado e vai funcionado.
}

// não existe y fora do bloco, ou seja, aqui em baixo não vai ser acessado.
console.log("Existem um y ? ", y);

// massss, podemos fazer oseguinte

let y = 1;
{
  y = 10;
  console.log("Existem um y ? ", y);
}

console.log("Existem um y ? ", y);

// as duas vão aparecer com o mesmo valor, isso porque o let foi atribuido fora do scopo e dentro do scopo foi apenas  inserido um novo dado.

// a const é a mesma coisa, só é possivel colocar de forma local e não é possivel aterar o  dado igual fizemos logo acima co o o let
