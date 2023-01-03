let receitas = {
  incomes: [10000, 10000, 2000],
  expenser: [1000, 200, 210],
};

function some(array) {
  let total = 0;
  for (value of array) {
    total += value;
  }

  return total;
}

function calculate() {
  const expenserTotal = some(receitas.expenser);
  const insumesTotal = some(receitas.incomes);

  const total = expenserTotal - insumesTotal;

  if (total >= 0) {
    alert("saudo positivo, parabens :" + total);
  } else {
    alert("saudo nnegativo, lamentavel :" + total);
  }
}

calculate();
