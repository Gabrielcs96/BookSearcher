const livros = require("./database");

// Pegar um input para a pessoa decidir se ela quer pegar o livro por categoria

// Se sim , mostramos as categorias disponíveis, se não, colocamos todas as categorias em ordem
// pela quantidade de páginas

const readline = require("readline-sync");

const entradaInicial = readline.question("Voce quer buscar um livro ? S/N");
if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponíveis: ");
  console.log("Comédia || Romance ||  Suspense  ");

  const entradaDaCategoria = readline.question(
    "Qual categoria você escolhe ? "
  );

  const retonro = livros.filter(
    (livro) => livro.categoria === entradaDaCategoria
  );
  console.table(retonro);
} else {
    console.log("Estas são todas as possibilidades de livros que temos disponíveis: ")
    const livrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas)
    console.table(livrosOrdenados)
}
