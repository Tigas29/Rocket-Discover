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
