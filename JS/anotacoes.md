# JavaScript

Linguagem que roda no navegador do usuário (front-end), quaisquer funções são responsáveis pelo js. Roda no back-end tbm com mesa de produção como o nodejs.

---

# **Sintaxe**

Maneira correta de escrever.

```jsx
Maneira correta

console.log("Hello world")

Maneira errada

consolelog("hello World)
```

---

# Dados

## String

- Conjunto de caracteres (texto)
- aceita aspa simples e aspa duplas
- é possível colocar expressão dentro de um template string
- ***

## Number

- números
- podemos ter inteiros
  - pode ser retornadao NaN (not a number) para situações que colocamos outras coisa sem ser numeros
  - Ifinity
  ## Boolean
  - ou é verdade ou é falso
  ***
  ## Undefined vs null
  - undefined é idefinido que não existe
  - null é objeto que não tem nada
  -
  ## Object
  Dado estrutural que contem propiedades com valores
  Tem a função de guardar items para serem usados.
  ```
  var object = {
    nome: "Tiago",
    idade: 18,
    escreve: function () {
      console.log("Escreve");
    },
  };
  ```
  ***
  ## Array
  - Outro jeito de estruturar dados.
  - Agrupamentos de dados
  - como se fosse uma lista, diferente do object
  -
  # ECMAScript
  ## Dados primitivos
  são dados que não mudam (string, number, boolean…)
  ## Estruturais
  Tem um estrutura que contem atributos para defini-los.

---

# Variáveis

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: `var clima = "quente"`
, onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

---

# Tipos dinâmicos

- Tipagem fraca, isso quer dizer que no js não precisa declarar qual o tipo de variável vamos ter, ou seja, ela não é estática.
- O tipo existe a partir do momento que um valor é atribuido.
- Para ver qual o tipo de variável é a declaração, usamos o `typeof`
- Podemos mudar o tipo de variavel, isso faz o js ser dinâmico.
- ***

# Scope e var, let e const

o SCOPE determina a visibilidade de alguma variável no js.

> um scopo é uma chave que fecha um bloco.

```jsx
{
  // isso é um scopo

  var x = 0;
  console.log(x);
}
```

Vamo entender a diferença na declaração de uma variável.

var é global e pode ser acessado em qualquer lugar do código.
o js faz com que o código que for declarado em baixo de uma chamada, seja jogado para cima como undefined e deixar no mesmo local padrão a atualização com o dado daquela variável.

**Let** só funcionam no scopo onde foi criada. Ou seja, ele é local e não global.

**Const** é igual o o let, só é possivel acessar dentro do scopo.

---

# Nomeando Varáveis.

Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.

# Declaration assignment var

Para declarar uma variável podemos usar var, let e const, e para atribuírmos valores à essa variável utilizamos o caractere =, e para vermos o tipo dessa variável podemos utilizar a função `console.log(typeof variavel)`
.

---

# **Concatenando e interpolando variáveis**

É possível concatenar strings com o operador +, por exemplo: `console.log('o ' + name + ' tem ' + age + ' anos.')`
 desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável, por exemplo `console.log(`
O ${name} tem ${age} anos.`)`
 o resultado deste comando será o mesmo texto do anterior.

---

# Objects

Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos, por exemplo: `const person = { name: 'John', age: 20 }`
, para acessar essas propriedades usamos o ".", por exemplo: `console.log(person.name)`
.

---

# Arrays

Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: `const animals = [ "Lion", "Monkey" ]`
, para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: `console.log(animals[0])`
. Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: `animals.length`
.

---

# Function

Funções são tipos de dados estruturais, que são declarados dessa forma: `function nomeFunção() { código à cer executado }`
 e para executar a função, usa-se: `nomeFunção()`
. Uma função é importante para o agrupamento e reutilização de código.

Um bloco de código esperando para ser chamado e executado em algum momento.

---

# Argumentos e parametros

- podemos colocar funções dentro de variaveis.
- São chamadas de function anonymous ou function expression.
- parameter é o que vai dfentro do () sendo possivel utilizar dentro do bloco de código.

---

# Return in functions

Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

```jsx
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
```

---

# Function scope

Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

---

# Function Hoisting

//function hoisting

sayMyName();

function sayMyName() {

console.log("Tiago");

}

// isss vai ocorrer um hoisting

//poremmm se a function estiver numa const e var  isso não vai aconntecer

---

# ARROW FUNCTION

Uma forma mais morderna de colocar uma functiona uma variável.

let teste = () ⇒{console.log(”oi”)}

---

# Function construtctor

Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

```jsx
function Person(name) {
  this.name = name;
}

const Jhon = new Person("Tiago");
console.log(Jhon);

// o que ta fora vai ser referenciado cmomo this.--- dentro da function
```

---

# Prototype

O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

<aside>
💡 É isso que faz maniplarmos os dados.

</aside>

```jsx
// é basicamente usar prototype que podemos acessar no js

console.log("Mayky".length);

//length seria um prototype que vai contar quantas letras tem dentro da string.
console.log("Mayky".__proto__);

// proto vai herdar todos os dados possiveis dessa string.

console.log((1.0).__proto__);
// dentro do --proto desse nyumero temos outro proto que é o dados mais primitio que temos
```

# Type conversion coersion

> Ambas alterão um tipo de dado para o outro

- Type conversion voce que altera implicitamente
- Type Corseion é o js que faz isso.

---

# String em números

Uma forma de manipular uma string para numero é usando o number.

Quando temos um numero , temos uma coloração diferente no console do navegador.

```
let string = "123";
console.log(Number(string));
let number = "123";
console.log(String(string));
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7c8908e-fcd6-4df7-9385-e2630ada5e16/Untitled.png)

---

# Contando caracteres e digitos

```jsx
let word = "tiago alemeida santos";

console.log(tiago.length);

let number = 123;

console.log(number.length); // isso n funciona   mmass

console.log(string(number).length);
```

---

# Casas decimais

```jsx
let number2 = 1231.23123123123123213;

console.log(number2.toFixed(2));

// vai aparecer dois numeros apos o ponto

// trocar ponto por virgula

console.log(number2.toFixed(2).replace(".", ","));

// isso daqui retorna uma string
```

---

# Upper case and lower case

```jsx
let strings = "oi";

console.log(strings.toLowerCase());
console.log(strings.toUpperCase());
```

---

# **Separando strings**

element.split transforma o texto todo num array, podemos colocar argumentos dentro do split para que o texto seja separado, vamo ver um exemplo onde eu queor que o texto seja separado dentro desse array a cada vez que eu dou um espaço.

```jsx
let phrase = "Hoje o dia está  lindo , não é mesmo  ? ";

let array = phrase.split(" ");
```

join junta um array com um argumento dado, no exemplo abaixo, vamos juntar usando o “\_”

```jsx
let phrase = "Hoje o dia está  lindo , não é mesmo ? ";

let array = phrase.split(" ");

console.log(array);

let newPrhase = array.join("_");
console.log(newPrhase);
```

---

# Checking se tem uma palavra

Usamo o .include(”argumentos”) para verificar se tem uma palavra em especifico no que queremos veri

```jsx
let justAPhrase = "Hoje o dia está  lindo , não é mesmo ? ";

let result = justAPhrase.includes("dia");

console.log(result);
// true
// false

// retorna no final se é true ou false
```
