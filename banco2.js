class BancoCentral{
    static transferir(emitente, destino, valor, senha){
        if(emitente.sacar(valor, senha)){
            destino.depositar_via_BC(valor)
        }
        console.log("deposito bc concluido")

    }
}

class Historico{
    #historicos

    constructor(){
        this.#historicos = []
    }

    adicionar(transacao){
        this.#historicos.push(transacao)
    }

    listar(){

        for (const i of this.#historicos){
            console.log(`\nTipo: ${i.tipo}\nValor: ${i.valor}`)
        }


    }
}

class Transacao{
    #tipo
    #valor

    constructor(tipo, valor){
        this.#tipo = tipo
        this.#valor = valor
    }

    get tipo(){
        return this.#tipo
    }

    get valor(){
        return this.#valor
    }

}

class Pessoa{
    #nome
    #cpf

    constructor(nome, cpf){
        this.#nome = nome
        this.#cpf = cpf
    }

    criar_conta(){
        return new Conta(this)
    }

    get nome(){
        return this.#nome
    }
}

class Conta{
    #senha = "1234"
    #dono
    #saldo
    #historico

    constructor(dono){
        this.#dono = dono
        this.#saldo = 0
        this.#historico = new Historico()
    }

    extrato(senha){
        if (!this.verificar_senha(senha)){
            console.log("\nSenha incorreta!")
            return
        }

        console.log("\nConta: "+this.#dono.nome + "\nSaldo em conta: \nR$ "+ this.#saldo)

    }

    sacar(valor, senha){
        if (!this.verificar_senha(senha)){
            console.log("\nSenha incorreta!")
            return false
        }

        if (valor > this.#saldo){
            console.log("\nSaldo insuficiente!")
            return false
        }

        this.#saldo -= valor
        console.log("\nSaque realizado com sucesso!")
        // console.log(this.#saldo)

        const transacao = new Transacao("SAQUE", valor)
        this.#historico.adicionar(transacao)


        return true
       

    }

    depositar(valor, senha){
        if (!this.verificar_senha(senha)){
            console.log("\nSenha incorreta!")
            return
        }
        if (valor < 0){
            console.log("\nDeposito negado!")
            return
        }

        if (valor > 2000){
            console.log("\nLimite de deposito excedido!")
            return 
        }
        this.#saldo += valor

        const transacao = new Transacao("DEPOSITO", valor)

        this.#historico.adicionar(transacao)

        // console.log(this.#historico.listar())
        console.log("\nDeposito realizado com sucesso!")
        // console.log(this.#saldo)

    }

    depositar_via_BC(valor){
        this.#saldo += valor
        console.log("deposito via bc, saldo: "+this.#saldo)

        const transacao = new Transacao("DEPOSITO BC", valor)
        this.#historico.adicionar(transacao)

    }

    verificar_senha(senha){
        return senha == this.#senha ? true : false
    }

    mostrar_valor(){
        console.log("\nHistórico da conta: "+this.#dono.nome)

        this.#historico.listar()
    }
}

isa = new Pessoa("isa", "1234")
isaConta = isa.criar_conta()

isaConta.depositar(100, "1234")
// isaConta.sacar(60, "1234")
isaConta.extrato("1234")

belli = new Pessoa("belli", "1342")
belliConta = belli.criar_conta()

belliConta.extrato("1234")

BancoCentral.transferir(isaConta, belliConta, 20, "1234")

isaConta.extrato("1234")
belliConta.extrato("1234")

isaConta.mostrar_valor()
belliConta.mostrar_valor()
