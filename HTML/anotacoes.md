<aside>
👨🏾‍💻 `<!-- Hyper text markup languague -->`

</aside>

---

# Comentários

Comentários são feito para que o navegador não exiba o comentário ou linha de código para o usuário.

---

# Anatomia das tags

```html
<--! Existem tags que precisam ser fechadas e outras que não: -->

<div tittle=precisaserfechada>
    <span>Essa tag precisa abrir e fechar <Span/>
    <img src=”” alt=” essa tag não precisa fechar ” >
 </div>
```

---

# Atributos

<aside>
❕ São informação extras ou configurações de uma tag

</aside>

```html
<img src=”” alt=”Isso aqui é a configuração pura, pois sem o src e o alt a tag img
não funcionaria”>;

<a href="" tittle="esse aqui é apenas uma informação de titulo, sem ela a tag a ainda f
uncionaria"</a>
```

---

# Atributos Globais

Existem atributos que podem ser colocados em qualquer tag. Mas nem todas as tag vão fazer efeito com esses atributos.

```html
<div class="”QualquerNome”">
  <!— elementos aqui dentro —!>
  <p>Usamos class para classificar, estilizar e usar no js</p>
</div>

<div class="”asdasdasd”" contenteditable="”true”">
  <p>Isso faz com que o conteúdo possa ser editado pelo usuário no navegador</p>
</div>

<div id="”unico”">
  <p>
    Esse id é comumente para ser usado com exclusividade, ou seja, não é correto
    ter dois ids com o mesmo nome.
  </p>
  <!—Utilizamos também para estilizar e inserir no js —>
</div>

<div hidden>
  <p>Ao colocar essa tag, todo o conteudo é ocultado no navegador</p>
</div>

<div data-qualquerCoisa="i">
  <p>
    A data deixa coloca qualquercoisa apos o "-" , como por exemplo um id,
    class, tittle e é utilizado no js e css
  </p>
</div>

<div style="color:red">
  <p>
    Esse atributo possibilita estilizarmos o elementos sem um arquivo esterno,
    porem isso não é usado
  </p>
</div>

<div tabindex="1">
  <p>
    isso aqui ajuda na acessibilidade do site, a cada "tab" ele segue a
    sequencia inserida nas tags
  </p>
</div>

<div tittle="um titulo">
  <p>
    Apenas um titulo para aparece quando o mouse for descansar em cima do
    conteudo
  </p>
</div>
```

Para mais informações: [https://developer.mozilla.org/pt-BR/](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes)

---

# Aninhamento Hierarquia

Significa colocar uma tag ficar dentro da outra, mas não é com tudo que funciona.

```html
<!-- FORMA CORRETA -->
<p> Um texto comum <em>enfase </em> para mostrar o aninhamento </p>

<!-- Forma "errada" -->
<p>Esse texto comum <em>enfase para mostrar o aninhamento </p></em>
```

---

**Hierarquia** tem que ser respeitada sempre , no caso acima o `p` é o pai de todo o texto, ou seja, o `em` precisa se fechado dentro da tag `p` para que a hierarquia seja respeitada.

Fluxo significa que o código será lido em um fluxo, sendo o que ta por baixo sera os últimos e quem é esta por cima sera os primeiros.

<aside>
❕ Existem algumas tag que quebram linhas automaticamente ao serem inseridas, como por exemplo o tag `p`

                                        `Input:                       output:

                        <p> oi </p>                       oi
                        <p> oi </p>                       oi`

</aside>

---

# Caracteres Reservados

Existem caracteres que são reservados pelo html, e não poderíamos usar em texto, pois daria algum erro.

<aside>
❕ Exemplos de caracteres reservados :   `< > & " " ' ‘`

</aside>

```html
<!-- Mas existem formas de inserir de forma que não de erro no código: -->
<p>&lt; menor que , &gt; maior que em inglês</p>
<p>&amp; é o & e comercial</p>
<p>&quot; é a aspas duplas &quot;</p>
<p>&apos; é a aspas simples &apos;</p>
```

---

# Anatomia Documento

```html
<!DOCTYPE html>
<!-- serve para o navegador identificar que é html5 -->
<html lang="pt-br">
  <!-- essa tag é o mais importante, onde contem tudo engloba tudo -->
  <head>
    <meta charset="utf-8" <!-- aceita caracteres especiais e acentuação -- />
    <!-- aqui é onde contem configurações importantes
 como metadados, seo, titulo da pagina e é paenas lido 
pelo navegador -->
  </head>
  <body>
    <h1>aqui é o que o navegador vai ver</h1>
    <!-- aqui é onde fica o codigo que vai aparecer no navegador -->
  </body>
</html>
```

---

# Semântica

<aside>
👌🏽 Usamos elementos para dar significados e as vezes até configurar a items que colocamos **(título, parágrafos, listas, tabelas**)

</aside>

## Título e parágrafos

Para títulos utilizamos o `h1`, `h2`, `h3` e `h4` sendo um menor que o outro.
Para parágrafos utilizamos o `p`.

```html
<!-- organização semantica -->

<h1>Sobre mim</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p>
  Voluptates tempora iusto at provident soluta distinctio fugit ratione
  consectetur deleniti vel quisquam deserunt architecto quas, possimus quos
  molestias maiores iste officia?
</p>

<h2>Nascimento</h2>
<h3>Infância</h3>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui officiis
  consequuntur corrupti nisi cumque esse dolorum fugit, rem suscipit cum
  laudantium expedita itaque odio a explicabo ex illo illum libero?
</p>
<h3>Adolescência</h3>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui officiis
  consequuntur corrupti nisi cumque esse dolorum fugit, rem suscipit cum
  laudantium expedita itaque odio a explicabo ex illo illum libero?
</p>

<h2>Trabalho</h2>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad vel
explicabo consequatur, ut magni doloremque sapiente, perspiciatis excepturi esse
ea neque sed! Blanditiis mollitia assumenda ipsum harum consequuntur. Veritatis.

<a href="">Saiba mais</a>
```

---

## Listas

Temos dois tipos de listas, as **ordenadas** e não **ordenadas**

<aside>
⚠️ Para seu código ser semântico, precisamos envolver a lista em uma lista ordenada ou não ordenada.

`<ul>`: Lista não ordenada (bullet points “·” )
`<li>`: Lista
`<ol>`: Lista ordenada( Ordem numérica “1-, 2-, 3,-…”)

</aside>

---

## Citação

Utilizamos essa tag para dar uma citação ou crédito para a pessoa.

O atributo `cite= ""` para colocar a url de onde vem a citação.

```html
<p> esse é um exemplo de citação que podemos usar <a href=””><cite>fonte </cite><a/>

<p> <q cite= "google.com"> esse texto vem do google e eu preciso dar o cite para ajudar
no <strong> seo e mecanismo de busca do meu site </strong></cite></p>

<blockcote> <p> isso aqui é para otexto asdlasdasdas <p> </blockcote>

<q> <p> usados para citações rápidas e que não precisam de quebra de linha. <p> </q>

```

---

## Abreviações

Utilizamos a tag `<abbr>` para aparecer algo no quando houver o descanso do mouse em determinada palavra.

```html
<!--EXEMPLO DE UTILIZAÇÃO -->

<p>
  Usamos Html <abbr tittle="”Hypertext" Markup language”>Html </abbr> para
  estruturar nosso documentos web.
</p>
```

---

## Detalhes de contato

Usamos para especificar o contato de algum autor utilizando <address>

```html
<address>
  <p>
    Tiago
    <strong>Taboao </strong>
  </p>
</address>
```

---

## Lista de descrição

Marcar um items com descrições
`<dl> description list

 <dt> description term
 <dd> descrição da lista de descrição`

```html
<h2>Ingrediente</h2>
<dl>
  <dt>leite</dt>
  <dd>De cavaaa</dd>
  <dt>Chocolate</dt>
  <dd>De cacauuuu</dd>
</dl>
```

---

## Representação de código

Para representar um código para não ser lido como código no navegador temos o `<code>` para partes genéricas e o `<pre>` para um bloco de código

```html
<pre>
<code>
    let print = “Oi”
          console.log(print)
</code>
</pre>

<code> getElementById </code>
```

---

## Elementos Genéricos

<div> usamos para separar um bloco de  código e <span> para um uma separação de textos e linhas.

```html
<div>
  <p>
    Esse texto está dentro de uma div e ela ajuda a separar e futuramente
    modificar os elementos qu estão aqui dentro
  </p>
  <img src="””" alt="””" />
</div>

<p>
  agora suposmos que eu queira mudar algo <span>nesse</span> utilizamos o span
</p>
```

---

# Tag âncora _Hyperlink_

<aside>
🚨 Anatomia: 
`<a href=””>Conteudo</a>`

</aside>

Atributos:

`href` é o direcionamentos para onde vai legar o hyperlink

`target` pode ser `_self` que vai abrir o link na mesma página, ou o `_blanked` que abrirá outra aba

```html
<!-- Atributos Globais: -->

<!-- mailto: para emails -->
<a href="”mailto:tiagoalmeidasantos04@gmail.com”">email</a>

<!-- tel: para números de telefone -->
<a href="”tel:+551199535004999”">Telefone </a>

<!-- https://: para links da página web -->
<a href="https://google.com">Google</a>
```

---

<aside>
⚠️ Para uma ancoragem dentro da página ou para um pagina dentro de nosso projeto utilizamos o `#nomeDoArquivo`

</aside>

---

```html
<a href="”#contato”">Contato </a>

<div id="”contato”">
  <p>
    Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum
  </p>
</div>
```

### **_Podemos inseri links em tudo(div,imagens, textos,titulos….)_**

<aside>
⚠️  URl: Uniform Resource Locator (texto que leva para algum lugar na web)

Para caminhos dos arquivos precisamos referenciar onde ele està localizado utilizando “./pasta/arquivo.html” e não utilizamos o https://

</aside>

```html
<!-- exemplo -->
<a href="https://google.com">Google </a>
<a href="”arquivo.html”" target="”_blank”">Arquivo</a>
```

---

## Navegar pelos arquivos

```html
<span>Utilizamos a “/” e “.” para navegar </span>
<a href=”./nomedoArquivo.html”>LINK </a>

<span>Para procurar pasta, sair de pasta, utilizamos dois ponto "../" </span>
<a href=”../pasta/nomedoArquivo.html”>LINK </a>

```

---

## Caminhos relativos e absolutos

**\*Relativos** são caminhos relativos ao seu projeto\*

**\*Absolutos** são caminhos para a web.\*

---

# Tabelas

**Criar e organizar tabelas**

<aside>
⚠️ Não usamos para criar layout!

</aside>

---

# Tabela básica

`<tr>` table row
`<th>` cabecalho
`<table>` div de uma tabela
`<td>` descrição

```html
<table>
  <!-- table row -->
  <tr>
    <!-- cabecalho -->
    <th>Nome</th>
    <th>Idade</th>
  </tr>

  <tr>
    <!-- descricao -->
    <td>Mayk</td>
    <td>35</td>
  </tr>
  <tr>
    <!-- descricao -->
    <td>Tiago</td>
    <td>35</td>
  </tr>
</table>
```

---

# Tabela complexa

```html
<table>
  <colgroup>
    <!-- cada col referencia uma coluna -->
    <!-- para preencher mais do que um espaco usamos o span -->
    <col />
    <col span="2" style="background-color: red" />
    <col span="2" style="background: blue" />
  </colgroup>
  <!-- titulo da table -->
  <caption>
    Vendidos x Produzidos por loja
  </caption>
  <!-- Table head element, serve para separar e destacar o conteudo da sua tabela -->
  <!-- div de uma table -->
  <thead>
    <!-- table row -->
    <tr>
      <!-- table head -->
      <!-- organiza o espaço que vai ocupar -->
      <th rowspan="2"></th>
      <!-- scope ajuda a entender que o th stem haver com o colgroup -->
      <th colspan="2" scope="colgroup">Afonsoo</th>
      <th colspan="2" scope="colgroup">Pereira</th>
    </tr>
    <tr>
      <!-- scope ajuda a entender que o th é uma coluna -->
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
    </tr>
  </thead>
  <!-- Conteudo da table -->
  <tbody>
    <tr>
      <!-- scope ajuda a entender que o th é uma linha -->
      <th scope="row">vasoura</th>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
    </tr>
    <tr>
      <!-- scope ajuda a entender que o th é uma linha -->
      <th scope="row">Farinha</th>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
```

---

# Cabeçalho

## Head

> É a parte não exibida pelo monitor

Podemos colocar links, títulos para pagina, favicon, e linkar css e outras apis.

---

## Meta

> Serve para configurar algumas coisa do site.

`<meta charset=”utf-8”>` serve por exemplo para o navegador ler caracteres especiais, como acentos ou até letras de línguas como japonês. (alguns navegadora fazem isso automaticamente, mas outros não)
`<meta name="viewport" content="width=device-width, initial-scale=1.0">` serve para o site ser adaptável a mobile.

---

## Favicon

> Favorite icon, serve para deixar um ícone no site

![Screenshot 2022-09-29 130633.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c1bdf90-e1c9-4135-ad68-d502d7b9fe9e/Screenshot_2022-09-29_130633.png)

`<link rel="icon" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>` serve para inserirmos esse ícone

---

## SEO

> Search engine optimization = ajuda no motores de busca para escalar o site

`<meta name="author" content="Mayk Brito">` para descrever o autor
`<meta name="description" content="Um website para iniciantes em programação">` descrição do site na pesquisa do google
`<meta name="robots" content="index, follow">` Defirnir o que o google faça, nesse caso, seguir link que tem na pagina e indexar a pagina na pagina de pesquisa.

## Meta Social

> personalizados se quisermos colocar umconteudo especial se compartilharmos em alguma rede social.

`<meta property="og:image" content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg">` cria um card especial para compartilhamentos do site dentro do facebook
`<meta name="twitter:title" content="Rocketseat">` cria um card especial para compartilhamentos do site dentro do twwiter.
