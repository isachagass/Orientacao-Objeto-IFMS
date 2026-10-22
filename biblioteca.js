class Usuario{
    #nome
    #cpf
    #quantidade_emprestados
    #limite
    #historico

    constructor(nome, cpf, limite){
        this.#nome = nome
        this.#cpf = cpf
        this.#quantidade_emprestados = 0
        this.#limite = limite
        this.#historico = new Historico()
    }

    get nome(){
        return this.#nome
    }

    get cpf(){
        return this.#cpf
    }

    get limite(){
        return this.#limite
    }
    
    get quantidade_emprestados(){
        return this.#quantidade_emprestados
    }

    get historico(){
        return this.#historico
    }

    emprestar(quantidade){
        if (quantidade > this.#limite || this.#quantidade_emprestados + quantidade > this.#limite){
            console.log("Não é possivel emprestar livros")
            return false;
        }

        this.#quantidade_emprestados += quantidade
        console.log("Livro emprestado")

        return true
    }

    devolver(quantidade){
        if (quantidade > this.#quantidade_emprestados || quantidade < 0){
            console.log("Não é possivel devolver essa quantidade")
            return false
        }

        this.#quantidade_emprestados -= quantidade
        console.log("livro devolvido")
        return true
    }
  
}

class Aluno extends Usuario{
    #matricula   
    // #quantidade_emprestados

    constructor(nome, cpf, matricula){
        super(nome, cpf, 2)
        this.#matricula = matricula
    }

    get matricula(){
        return this.#matricula
    }
    
}

class Professor extends Usuario{
    #departamento

    constructor(nome, cpf, departamento){
        super(nome, cpf, 5)
        this.#departamento = departamento
    }

    get departamento(){
        return this.#departamento
    }

}


class Livro{
    #isbn
    #titulo
    #autor
    #status

    constructor(isbn, titulo, autor){
        this.#isbn = isbn
        this.#titulo = titulo
        this.#autor = autor
        this.#status = "disponivel"
    }

    get isbn(){
        return this.#isbn
    }

    get titulo(){
        return this.#titulo
    }

    get autor(){
        return this.#autor
    }

    get status(){
        return this.#status
    }

    set status(tipo){
        this.#status = tipo
        // console.log("status alterado")
    }
}

class Biblioteca{
    #livros

    constructor(){
        this.#livros = []
    }

    cadastrar_livro(livro){
        this.#livros.push(livro)
    }

    emprestar(usuario, livro){
        const livro_existe = this.#livros.some((l) => l.isbn == livro.isbn)
        if(!livro_existe){
            console.log("Livro não encontrado")
            return false
        }

        if (livro.status != "disponivel"){
            console.log("Livro não disponivel no momento")
            return false
        }

        if (usuario.quantidade_emprestados == usuario.limite){
            console.log("Limite de emprestimos atingido pelo usuario")
            return false
        }

        usuario.emprestar(1)

        livro.status = "emprestado"

        const novo_emprestimo = new Emprestimo(usuario, livro)

        usuario.historico.adicionar_emprestimo(novo_emprestimo)

        console.log("tudo certo")
        
    }
}

class Historico{
    #historico

    constructor(){
        this.#historico = []
    }

    adicionar_emprestimo(emprestimo){
        this.#historico.push(emprestimo)
    }

    listar_historico(){
        console.log("\nHistorico de livros\n")
        if(this.#historico.length == 0){
            console.log("Não há registros")
            return
        }

        for (const i of this.#historico){
            console.log(`Usuario: ${i.usuario.nome}\nLivro: ${i.livro.titulo}\n`)
        }
        
    }


}

class Emprestimo{
    #usuario
    #livro

    constructor(usuario, livro){
        this.#usuario = usuario
        this.#livro = livro
    }

    get usuario(){
        return this.#usuario

    }

    get livro(){
        return this.#livro
    }
}


const isa = new Aluno("isa", "111", "2222")
// isa.emprestar(2)
// isa.devolver(1)
// isa.emprestar(3)

const livro1 = new Livro("111", "ai", "oi")
// livro1.status = "emprestado"

const biblioteca = new Biblioteca()
biblioteca.cadastrar_livro(livro1)

biblioteca.emprestar(isa, livro1)

isa.historico.listar_historico()

