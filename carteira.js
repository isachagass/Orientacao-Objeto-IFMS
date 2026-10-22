class Usuario{
    #nome
    #cpf
    #saldo
    #limite
    #historico

    constructor(nome, cpf, limite){
        this.#nome = nome
        this.#cpf = cpf
        this.#saldo = 0
        this.#limite = limite
        this.#historico = new Historico()

    }

    get nome(){
        return this.#nome
    }

    get cpf(){
        return this.#cpf
    }

    get saldo(){
        return this.#saldo
    }

    get limite(){
        return this.#limite
    }

    get historico(){
        return this.#historico
    }

    alterar_limite(valor){
        if (valor > this.#limite){
            console.log("Limite excedido")
            return false
        }
        this.#limite -= valor
        return true
    }

    retirar(valor){
        this.#saldo -= valor
        return true
    }

    depositar(valor){
        this.#saldo += valor
        return true
    }



}

class Pessoal extends Usuario{

    constructor(nome, cpf){
        super(nome,cpf, 1000)
    }

}

class Empresarial extends Usuario{

    constructor(nome, cpf){
        super(nome,cpf, 10000)
    }

}

class Historico{
    #historico

    constructor(){
        this.#historico = []
    }

    get historico(){
        return this.#historico
    }

    adicionar(transacao){
        this.#historico.push(transacao)
    }

    listar(){
        console.log("Historico\n")
        for(const i of this.#historico){
            console.log(`origem: ${i.origem.nome}\ndestino: ${i.destino.nome}\nvalor: ${i.valor}\nstatus: ${i.status}`)
        }
    }
}

class Transacao{
    #origem
    #destino
    #valor
    #status

    constructor(origem, destino, valor, status){
        this.#origem = origem
        this.#destino = destino
        this.#valor = valor
        this.#status = status
    }

    get origem(){
        return this.#origem
    }

    get destino(){
        return this.#destino
    }

    get valor(){
        return this.#valor
    }

    get status(){
        return this.#status
    }

}

class Transferencia{
    static transferir(origem, destino, valor){

        // se origem tem saldo suficiente e se o limite de transferencia
        // if(origem.saldo >= valor){
        //     console.log("saldo de origem suficiente")
        // }
        // else{
        //     console.log("saldo insuficiente")
        // }

        // if (origem.limite >=valor)
        
        if (origem.saldo >= valor && origem.limite >= valor){
           console.log("saldo disponivel e limite disponivel")
            if ( origem.retirar(valor) && origem.alterar_limite(valor) && destino.depositar(valor)){
                
                const nova_transacao = new Transacao(origem, destino, valor, "Sucesso")
                origem.historico.adicionar(nova_transacao)
                destino.historico.adicionar(nova_transacao)
                console.log("historico registrado")

            }
            
        }
        else{
            console.log("Saldo ou limite excedido")
            const nova_transacao = new Transacao(origem, destino, valor, "Falha")
            origem.historico.adicionar(nova_transacao)
            console.log("historico registrado")
        }
    }
}

const isa = new Pessoal("isa", "111")
const belli = new Empresarial("belli", "222")

isa.depositar(200)
belli.depositar(40)

Transferencia.transferir(isa,belli,50)

isa.historico.listar()
belli.historico.listar()