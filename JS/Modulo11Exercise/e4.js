const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const total = booksByCategory.length;

for (let category of booksByCategory) {
  console.log("total de livros da categoria : ", category.category);
  console.log(category.books.length);
}

function coutnAuthors() {
  let authors = [];
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log(authors.length);
}

coutnAuthors();

function coutnBooksOfAugutso() {
  let books = [];
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (books.author == "Augusto cury") {
        books.push(book.author);
      }
    }
  }
  console.log(books.length);
}

coutnBooksOfAugutso();
