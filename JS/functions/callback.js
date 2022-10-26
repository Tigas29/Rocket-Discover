// callback function

function sayMyName2(name) {
  console.log(name);
}

sayMyName2(() => {
  console.log("estou numa callback");
});

// é uma funcçao sendo executada em outra funcção como parametro .

//Uma callback function é uma função que está sendo passada para outra função como parâmetro.
