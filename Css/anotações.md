# CSS

<aside>
🚨 Cascale style sheet
Comentários : `/* aqui fica o comentário */`

</aside>

---

# Anatomia

```css
h1 {
  /* ****h1 é o seletor(”procure um h1 no meu código html”) */
  color: blue;
  /* blue é o valor */
  /* color é a propiedade */
}
```

---

# Seletores

- è o seletor global, tudo que for colocado nesse vai interferir em todo o código
  seletor de classe (`.`) é quando queremos mexer em alguma div que contem o `classname` correspondente.

---

# Box model

Tudo em css é editado como um “caixa”, segue imagem abaixo exemplificando como seria enxegardo um site pensando nessa primícia.

![28929274.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d72b7aa-f674-42dc-8d25-cdbe65c74b2f/28929274.png)

---

# Origem do css

<aside>
🚨 Temos 4 formas de colocar o css no html.

</aside>

**inline: colocar em linha direto na raíz**

```css
<h1 style=”color:red”> Texto aqui </h1>
	<style>
h1{
color:red
}
	</style>
```

---

**line: com um link que separa um arquivo só para o css e outro só para o html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 style="”color:red”">Texto aqui</h1>
  </body>
</html>
```

```css
h1 {
  color: blue;
}

strong {
  color: red;
}
```

---

**Import: usa no css para importar outros arquivos css, ou outras coisas como fontes do google fonts.**

```css
@import "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
  h1 {
  color: blue;
  font-family: roboto;
}

strong {
  color: red;
}
```

---

# Cascata

> Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
> Ou seja, sempre vai ser aplicado o que está por ultimo.

Importante sempre levar em conta que o código tem esse grau de importância (`inline > tag style > link`)

---

# Especificidade

É um calculo matemático, onde cada seletor tem um valor (0,1,10,11)

- (**Universal selector)** tem o valor **0**, por isso ele vai ser lido como prioridade número zero.

**h1,p,span, etc (Element type selector e pseudo-elements)** tem o valor **1.** Ou seja, no final das contas ele é exibido em cima de um seletor universal, pois seu valor é maior.

**Classe e seletores de atributos (class)** tem o valor o valor de **10**, ou seja, no final ele escreve em cima de tipos de elementos.

**Id** tem o valor de **100**, ou seja ,no final ele escreve em cima de todos os atributos a cima .

**inline** tem o maior peso, passando por cima de qualquer estilização.

é possível fazer diferenciações de forma, pegando um e juntando com outro. Por exemplo

```css
h1.tittle#tiitle {
  /* junção de tipo de elemento, classe e id*/
  color: red;
}

/* usamos a virgula para poder especificar uma regra no seletor */
.tittle,
.tittle strong {
  color: gray;
}
```

---

# **Regra important**

<aside>
🚨 **IMPORTANT NÃO É UMA BOA PRÁTICA.**

</aside>

> Mas… ele serve para quebrar a linha natural da cascata e ele cobre tudo sendo lido com maior importância

```css
.tittle {
  color: blue !important;
}
```

---

# At rule

regras que vem com o “@” e está relacionado com o comportamento do css

```css
/* @import (endereço css) importar outro arquivo css;  */
/* @font-face {
        font-family: ;
        src: url();
      } importar uma fonte diretamente de nosso projeto */
/* @media serve para regras para diferentes resoluções */
/* @keyframe serve para animação */
```

---

# Shorthand

é tipo um clen code. Uma junção de propriedades de forma resumida e legível.

```css
 {
  /* background properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthand*/
  background: #000 url(images/bg.gif) no-repeat left top;

  /* font properties */
  font-style: italic;
  font-weight: bold;
  font-size: 0.8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: bold italic 0.8em/1.2 Arial, sans-serif;
}

/* não vai considerar propiedades anteriores
       valores não especificado irao assumir o valor padrão
       a ordem descrita não importa  */
```

[https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#:~:text=Shorthand properties are CSS properties,sheets%2C saving time and energy](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#:~:text=Shorthand%20properties%20are%20CSS%20properties,sheets%2C%20saving%20time%20and%20energy).

---

# Funções

Nome seguido da função seguido de uma abertura e fechamento de `()`

**Toda função recebe um argumento.**

```css
exemplo:
/* color é o seletor, rgb() é a função e o 255,0,100 é o argumento */
color: rgb(255,0,100);
```

---

# DevToolS

Uma das ferramentas mais importantes para o desenvolvedor CSS é o DevTools (do inglês, Ferramentas de Desenvolvedor), é recomendado que você estude e faça uso da mesma, pois será muito utilizada.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06d5d398-cf1e-48ac-811d-465e40142920/Untitled.png)

---

# **_UNIDADES DE MEDIDAS E VALORES_**

# Property

**property: value == color: blue**

### Na prática

---

- Como conhecer e estudar os valores na documentação?
  - `<color>` `<length>`
- Os termos podem variar `values` ou `data types`
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00911a5d-bcb1-4aec-9633-f44bc51e643b/Untitled.png)

---

# Vendor Prefixes

Permite que os browser adicione novidades a fim de colocar alguma novidade que vemos no css

```
-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */
```

Você também pode consultar se a feature pode ser utilizada através dos sites:

**[https://ireade.github.io/which-vendor-prefix](http://ireade.github.io/which-vendor-prefix)**

**[https://caniuse.com](http://caniuse.com/)**

---

# Tipos Numéricos e unidades comuns

### Tipos numéricos

---

- `<integer>` - número inteiro como `10` ou `223`
- `<number>` - número decimal como `2.4`, `64` ou `0.234`
- `<dimension>` - é um `<number>` com uma unidade junto: `90deg`, `2s`, `8px`
- `<percentage>` - representa uma fração de outro número: `50%`

### Unidades comuns

---

- `<length>` - é um dos mais usados no CSS e representa um valor de distância: `px`, `em`, `vw` (esse é o mais comum visto)
- `<angle>` - representa um ângulo: `deg`, `rad`, `turn` (são giros em graus, radianos ou turnos)
- `<time>` - representa um tempo: `s`, `ms`
- `<resolution>` - representa resoluções para dispositivos: `dpi`

---

# Distância absolutas e realtivas

<aside>
👌🏽 Distância absoluta São fixas e não alteram seus valores

</aside>

Algumas unidades são:

| \*\* | Unidade            | Nome                | Equivalência |
| ---- | ------------------ | ------------------- | ------------ |
| cm   | Centímetros        | 1cm = 96px/2.54     |
| in   | Inches (polegadas) | 1in = 2.54cm = 96px |
| px   | Pixels             | 1px = 1/96th of 1in | \*\*         |

> o mais comum usado é o pixels e o menos recomendado é o centímetros

---

<aside>
👌🏽 Distância relativas são relativas a outros valor, quer seja o valor da tela ou ao root.

</aside>

| \*\* | Unidade                                                                                                        | Relativo a |
| ---- | -------------------------------------------------------------------------------------------------------------- | ---------- |
| em   | Tamanho da font do elemento pai (div tem 16px e h1 dentro dela tem 2em, o h1 tera o numero mutiplicado por 2 ) |
| rem  | Tamanho da font do elemento raiz (root/html)                                                                   |

:root {
font-size: 18px;
}

/_ OU _/

html {
font-size: 18px;

}

|
| vw | 1% da viewport wid 1 pedacinho do 100 que temos |
| vh | 1% da viewport height 1 pedacinho do 100 que temos |\*\*

---

# Porcentagens

> **São flexíveis e sempre será relativa a algum valor.**

```html
<ul>
  <li>One</li>
  terá 80% do root
  <li>Two</li>
  terá 80% do root
  <li>
    Three terá 80% do root
    <ul>
      <li>Three A</li>
      terá 80% da li acima
      <li>Three B</li>
      terá 80% da li acima
      <ul>
        <li>Three B 2</li>
        terá 80% da li acima
      </ul>
    </ul>
  </li>
</ul>
```

```scss
li {
  font-size: 80%;
}
```

---

# **Position**

<aside>
⚠️ são coordenadas 2d (left, right, top, bottom)

</aside>

- Usado para alguns tipos de propriedades como o `background-position (background-position: right 50px)`
- Não confundir com a propriedade `position`
  ***
  # Funções
  **Exemplos de funções do CSS:**
  - `rgb()` faz a soma dos numeros de 1 a 255 para retornar uma cor especifica
  - `hsl()` calcula a cor rgb de acordo com a saturação, matiz e luminosidade prospota em porcentagem
  - `url()` importa imagem ou algo que alguém ja fez
  - `calc()` exemplo: (height:calc(50% + 20px) **lembrando que o calc precisa sempre de uma referencia de tamanho** )
    Dentro dos parêntesis são passados argumentos
  ***
  # Strings e identificadores
  identificadores é basicamente usar nomes para um valor(red,black,white…)
  ```css
  .box::after {
    content: "Isso é uma string" esse conteudo é uma string e è um outro tipo de
      valor no css.;
  }
  ```
  ***
  # _BOX MODEL_
  # O que é
    <aside>
    🔑 um conceito usado para fazer layouts para web
    
    </aside>
    
    ### Propriedades da caixa
    
    - Tamanho (largura x altura) → **width | height**
    - Conteúdo → **content**
    - Bordas → **border**
    - Preenchimento interno → **padding**
    - Espaços fora da caixa → **margin**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae65d8fb-a824-4a04-845a-1318a01359b6/Untitled.png)

---

# Box sizing

**HTML:**

```
<div>
	CSS é incrível!
</div>
```

**CSS:**

```
div {
   width: 100px;
   height: 100px;
   border: 1px solid red;
   margin: 10%;

}
/* até entao temos uma caixa de 100px de largura */
```

Quando o padding é adicionado (`padding: 0 20px;`) faz com que aumente a largura da caixa, deixando de respeitar os `100px`
 de largura. Logo se formos somar, teriamos 140px de largura no total.

Por isso è importante usamos a propriedade **box-sizing.** Usando ela vamos fazer com que ele se mantenha ao tamanho real da caixa.

```css
div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;
}
* {
  box-sizing: border-box;
}
```

---

# **Display-block-inline**

<aside>
🚨 A maioria já são block

</aside>

> display é a apresentação da caixa.

- Como as caixas se comportam em relação as outras caixas
- Comportamento externo das caixas

**block** empurra para baixo e ocupa a linha toda (`<p> <div> <section>`,`<h1> <h2>`...)

- respeita alturas e tamanhos setados nos css
- padding, margin, border irão funcionar normalmente

**inline** deixa na vertical (`<a> <strong> <span> <em>`)

- width e height não funciona
- somente valores de margin e padding, mas somente em sentidos horizontais.

Caso queria mudar o block para inline ou vice-verce é so usar o seguinte código: `display: block ou inline`

---

# Margin

> **São os espaços entre elementos**

Aceitam valores de **tamanhos** **porcentagem** e **auto**.

- Podemos dividir o margin em 4 valores:
  ```
  /* margin-top | margin-right | margin-bottom | margin-left */
  ```

São inseridos na sequencia horaria

```css
.tittle {
  color: blue !important;
  border: 1px solid black;

  margin: 10px /* leva 10px para todos os lados */;
  margin: 10px 5px /* leva 10px em cima e embaixo e 5px do lados; */;
  margin: 10px 10px 15px; /* leva 10px para cima, 10px para adireita e 15 px para baixo */
  margin: 10px 15px 10px 5px; /* leva 10px em cima, 15px na direita, 10px para baixo e 5px para esquerda */
}
```

**margin-colapsin (tem que tomar cuidado com isso)** que é quando o top se junta ao bottom. Isso so acontece isso quando um está abaixo do outro.

```html
<div>div</div>
<section>section</section>
<style>
  div {
    margin-bottom: 8px;
  }
  section {
    margin-top: 8px;
  }
  /* isso vai gerar um colapso */
</style>
```

---

# Padding

O `padding` é o **preenchimento** **interno** da caixa.

A propriedade padding pode ser escrita como nos formatos apresentados abaixo:

`padding-top | padding-right | padding-bottom | padding-left`

o shorthand é igual o margin

```css
.tittle {
  color: blue !important;
  border: 1px solid black;

  padding: 10px /* leva 10px para todos os lados */;
  padding: 10px 5px /* leva 10px em cima e embaixo e 5px do lados; */;
  padding: 10px 10px 15px; /* leva 10px para cima, 10px para adireita e 15 px para baixo */
  padding: 10px 15px 10px 5px; /* leva 10px em cima, 15px na direita, 10px para baixo e 5px para esquerda */
}
```

---

# Border-outiline

> São as bordas da caixa

- **value**: `<border-style>` | `<border-width>` | `<border-color>`
  - style: solid | dotted | dashed | double | groove | ridge | inset | outset
  - width: `<length>`
  - color: `<color>`
  -

```css
div {
  /* shorthand */
  border-top: solid 2px; /* top | right | bottom | left */

  /* style */
  border: solid;

  /* width <length> | style */
  border: 2px dotted;

  /* style | color */
  border: outset #f33;

  /* width | style | color */
  border: medium dashed green;
}
```

---

<aside>
🚨 Com a borda ativada, o valor é adicionado junto com o width. Segue exemplo

</aside>

```css
.tittle {
  width: 100px;
  border: 1px solid red;
  /* o total vai ser 102 e não 100 */
}
```

## Outline

- Ele insere a borda pelo lado de fora da caixa
- Ele não altera o valor da caixa

---

# Cores e Background

Usamos CSS para alterar cores do nosso documento.

### Tipos

- background-color (para caixas)
- color (para textos)
- border-color (para caixas)
- outros

### Valores

Podemos definir valores por:

- palavra-chave (blue, transparent)
- hexadecimal (#990011)
- funções: rgb, rgba, hsl, hsla

---

# KeyWord named values

Keyword são palavra chaves, named values é o nome da cor.

HTML

```html
<div>
  <h1>Um texto aqui</h1>
  <p>Mais texto</p>
</div>
```

CSS

```css
div {
  color: blue;
}

h1 {
  color: red;
}
```

---

# Hexadecimal

<aside>
🚨 São valores de red green e blue, podendo conter até 9 caracteres e no mínimo 3 caracteres.

</aside>

O quarta elemento seria o alfa, usamos para trabalhar a transparencia,

```css
/*<hex-color> values 0-9 e A-F*/
color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a;
color: #009900aa;
```

---

# RGB

> **RED GREEN BLUE (0 até 255)**

- RGB → Red, Green e Blue
- O alpha representa a transparência da cor

```
/*<rgb()> values */
color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(34, 12, 64, 0.6)
```

---

# HSL

HSL → Hue - Saturation - Lightness

```
color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ae578d5-2af6-4245-a722-a661379dcc5c/Untitled.png)

---

# Global Values

Nessa aula vamos ver sobre os valores globais da propriedade `color`.

```
/* Global values */
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */
```

## Referência

**[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)**

---

# Background

> Por padão ela vem tranparente
>
> - Define um fundo para nosso elemento
> - Sua área de atuação é a caixa toda
> - Por padrão, é transparente
>
> ---

# Background-color

essa propiedade define um fundo para o elemento selecionado.

HTML

```html
<header></header>
<main>
  <h1>Evolua rápido com a tecnologia</h1>
  <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos</p>
</main>
```

CSS

```css
* {
  margin: 0;
}

header {
  height: 100px;
  border: 7px dashed red;
  background-color: rgb(55, 100, 50);
}
```

---

# **Background-image-repeat**

<aside>
🚨 Para adicionar uma imagem de fundo , usamos o `background-image` e ela vem por padrão para se repetir até completar todo o espaço.

</aside>

Para manipular isso, usamos :

```css
/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;
```

---

# **Background-position**

<aside>
❕ Com essa propiedade podemos mudar a posição que a imagem deve ficar.

</aside>

```css
/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;
```

---

# Background-size

com essa propriedade vamos alterar o tamanho original dela.

Alguns valores usados para isso são :

```css
/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;
```

---

# Background-origin-clip

Com essa propriedade altera a origem de começo da imagem.

```
/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

- O `background-clip` define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

```
/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
```

---

# Background-Attachment

Essa propiedade determina a posição que a imagem vai ficar ou seguir. (se ela vai rolar com a página ou vai ficar fixa)

```css
/* Principais valores */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local; <-- o padrão
```

---

# Shorthand

Nós podemos agrupar tudo em uma só propriedade (`background`)

`background: black no-repeat center left url(*blablabla*) border-box`

---

# Gradient

- `linear-gradient()` é a função usada para criar gradient linear com o CSS.

sempre colocar o inicio e o fim da cor (yellow to orange)

```
background: linear-gradient(45deg, red, yellow)
```

- `radial-gradient()` é a função usada para criar gradient circular.

```
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))
```

**podemos usar cores rgba**

---

# Múltiplos valores

Podemos aplicar múltiplos backgrounds em um mesmo elemento, podendo ter cor sólida, gradiente ou imagem. Para isso basta separar por vírgula cada background.

<aside>
❕ **é so colocar tudo e separar por virgulas**

</aside>

`background:linear-gradient(yellow,green) border-box, red fixed;`

# Layouts

# Positions

É uma propiedade do comportamento de uma div

- Name: position
- Value: static | relative | absolute | fixed

---

## Static

esse é o padrão das div, onde vai fazer com que seja seguido o fluxo padrão da página (um embaixo do outrto)

---

## Relative

Quando o position é **relative**
os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

- junto com o relativo, vem juto propiedades para mexer no elemento (top, left, bottom e right)

HTML

```html
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
```

CSS

```css
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: relative;
  left: 100px;
  top: 80px;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```

---

## Absolute

Como se eliminado o espaço reservado para esse elemento, criando uma nova camada para esse elemento

- também recebe as 4 propiedades para alterar sua posição (top, left, bottom e right)

HTML

```html
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
```

CSS

```css
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 100px;
  top: 80px;
}

.box2 {
  background-color: green;
}

.box3 {
  background-color: blue;
}
```

---

## Fixed

- cria um elemento flutuante
- fica exatamente fixo a página (ao scrolar ele vai estar no mesmo lugar )

---

## Element stacking

- isso diz qual o index desse elemento (quanto maior o numero mais a camada e quanto menor o numero menor a camada)

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

HTML

```html
<div class="box box1"></div>
<div class="box box2"></div>
<div class="box box3"></div>
```

CSS

```css
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.box1 {
  background-color: red;
  position: absolute;
  left: 5px;
  top: 5px;
  z-index: 3;
}

.box2 {
  background-color: green;
  position: absolute;
  left: 10px;
  top: 10px;
}

.box3 {
  background-color: blue;
  position: absolute;
  left: 15px;
  top: 15px;
}
```

---

# Flex

- Nos permite posicionar os elementos dentro da caixa
- Controle em uma dimensão (horizontal ou vertical)
- Alinhamento, direcionamento, ordenar e tamanhos

> Só precisamos colocar um display:flex na caixa “pai”.

```css
div.parent {
  display: flex;
}
```

### Flex-direction

- Qual a direção do flex: horizontal ou vertical
- row | column

### Alinhamento

- justify-content
- align-items

HTML

```
<div class="container">
  <div class="box blue"></div>
  <div class="box red"></div>
  <div class="box green"></div>
</div>
```

CSS

```
.container {
    display: flex;
    justify-content: space-between;
}
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
```

---

# Grid

- Faz posicionamentos do elementos
- Posiciona na horizontal e vertical, diferente do flex
- Pode ser flexivel ou fixo
- Ele cria espaços para os filhos dele habitarem

```html
<body>
  <header>Topo</header>
  <main>Conteudo</main>
  <aside>Conteudo de anuncio</aside>
  <footer>Footer</footer>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: grid;
      grid-template-areas:
        "header header " "main aside"
        "footer footer";

      grid-template-rows: 30px 1fr 40px;
      grid-template-columns: 80vw 1fr;
    }
    header {
      grid-area: header;
      background-color: red;
    }
    main {
      grid-area: main;
      background-color: green;
    }
    aside {
      grid-area: aside;
      background-color: blue;
    }
    footer {
      grid-area: footer;
      background-color: yellow;
    }
  </style>
</body>
```

---

# Grid ou flex

- podemos usar os dois no mesmo código mas não podemos usar eles juntos;

HTML

```html
<body>
  <header>
    <div>Logo</div>
    <div>Menu</div>
  </header>
  <main>Conteúdo</main>
  <aside>Infos adicionais</aside>
  <footer>Rodapé</footer>
</body>
```

CSS

```css
body {
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
  grid-template-rows: 30px 1fr 40px;
  grid-template-columns: 1fr 80px;
}

header {
  grid-area: header;
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
}

main {
  grid-area: main;
  background-color: red;
}

aside {
  grid-area: aside;
  background-color: blue;
}

footer {
  grid-area: footer;
  background-color: gray;
}
```
