const livros = []

function criarLivro(nome, autor, anoPublicacao, categoria){
    const novoLivro = {
        id: Date.now(),
        nome: nome,
        autor: autor,
        ano_publicacao: anoPublicacao,
        categoria: categoria || "Geral"
    }
    livros.push(novoLivro)
    return novoLivro
}

function buscarTodosOsLivros(){
    return livros
}

function buscarLivroPorNome(nome){
    const filtrarLivro = livros.find(livro => livro.nome === nome)
    return filtrarLivro
}

function buscarLivroPorCategoria(categoria){
    const filtrarLivro = livros.find(livro => livro.categoria === categoria)
    return filtrarLivro
}

function buscarLivroPorAutor(autor){
    const filtrarLivro = livros.find(livro => livro.autor === autor)
    return filtrarLivro
}

module.exports = {
    criarLivro,
    buscarTodosOsLivros,
    buscarLivroPorNome,
    buscarLivroPorCategoria,
    buscarLivroPorAutor
}