const bibliotecaService = require("./biblioteca.service")

test("verificar se o titulo do livro é obrigatorio",function(){
    const resultado = bibliotecaService.criarLivro(null, "rowling", 2000, "Fantasia")
    expect(resultado).toBe("Erro: Nome é obrigatório!")
})

test("Verificar se o nome do autor é obrigatorio",function(){
    const resultado = bibliotecaService.criarLivro("Harry Potter", null, 2000, "Fantasia")
    expect(resultado).toBe("Erro: Autor é obrigatório!")
})

test("Verificar se o ano de publicação é obrigatorio",function(){
    const resultado = bibliotecaService.criarLivro("Harry Potter", "j.k.rowling",null, "Fantasia")
    expect(resultado).toBe("Erro: Ano de publicação é obrigatório!")
})


test("Verificação da busca com o titulo obrigatorio",function(){
   const resultado = bibliotecaService.buscarLivroPorNome(null)
   expect(resultado).toBe("Erro: Título é obrigatório para busca")
})

test("Verificação da busca com o autor obrigatorio",function(){
   const resultado = bibliotecaService.buscarLivroPorAutor(null)
   expect(resultado).toBe("Erro: Autor é obrigatório para busca")
})


test("Verificação da busca com a categoria obrigatorio",function(){
   const resultado = bibliotecaService.buscarLivroPorCategoria(null)
   expect(resultado).toBe("Erro: Categoria é obrigatória para busca")
})


test("verificar tudo correto",function(){
    const resultado = bibliotecaService.criarLivro("Harry Potter", "j.k.rowling", 2000)
    const resultado1 = bibliotecaService.criarLivro("Dom Casmurro", "Machado de Assis", 1899 , "Romance/Literatura Clássica Brasileira")
    const resultado2 = bibliotecaService.buscarLivroPorNome("Harry Potter")
    const resultado3 = bibliotecaService.buscarLivroPorCategoria("Romance/Literatura Clássica Brasileira")
    const resultado4 = bibliotecaService.buscarLivroPorAutor("j.k.rowling")
    const resultado5 = bibliotecaService.listarLivros()
    expect(resultado.nome).toBe("Harry Potter")
    expect(resultado1.nome).toBe("Dom Casmurro")
    expect(resultado2.nome).toBe("Harry Potter")
    expect(resultado3.categoria).toBe("Romance/Literatura Clássica Brasileira")
     expect(resultado4.autor).toBe("j.k.rowling")
     expect(resultado5[0].nome).toBe("Harry Potter")
    expect(resultado5[1].nome).toBe("Dom Casmurro")
})

/*test("Verificar se lista os livros",function(){
    bibliotecaService.criarLivro("livro1", "autor1", 2000, "Fantasia")
    bibliotecaService.criarLivro("livro2", "autor2", 2000, "ação")
    const resultado = bibliotecaService.listarLivros()
    expect(resultado[0].nome).toBe("livro1")
    expect(resultado[1].nome).toBe("livro2")
})*/