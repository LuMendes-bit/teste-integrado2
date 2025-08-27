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


test("verificar se o titulo do livro é obrigatorio 2",function(){
    const resultado = bibliotecaService.criarLivro("Harry Potter", "rowling", 2000, "Fantasia")
    const resultado2 = bibliotecaService.buscarLivroPorNome("Harry Potter")
    const resultado3 = bibliotecaService.buscarLivroPorCategoria("Fantasia")
    const resultado4 = bibliotecaService.buscarLivroPorAutor("rowling")
    expect(resultado.nome).toBe("Harry Potter")
    expect(resultado2.nome).toBe("Harry Potter")
    expect(resultado3.categoria).toBe("Fantasia")
     expect(resultado4.autor).toBe("rowling")
})