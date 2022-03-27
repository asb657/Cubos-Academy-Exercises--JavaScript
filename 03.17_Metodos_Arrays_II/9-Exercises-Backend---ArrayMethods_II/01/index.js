const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];


const encontrar = (nomeDoLivro, arrayLivros) => {
    const item = arrayLivros.findIndex((livro) => {
      return livro === nomeDoLivro;
    });

    if (item) {
        console.log(`O livro está na posição ${item+1}.`);
    } else { 
        console.log("Livro não encontrado");
    }

};

encontrar("A Montanha Mágica", livros);