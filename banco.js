class BancoCentral{
     static transferirValor(emitente, destino, valor, senha)
     {        
          if(emitente.sacar(valor,senha))
            destino.depositoViaBC(valor);
     }
}

class Pessoa{
    #nome
    #cpf
    #dataNasc
    #endereco
    
    get nome()
    {
        return this.#nome;
    }

    constructor(cpf, nome, dataNasc)
    {
       this.#cpf = cpf
       this.#nome = nome
       this.#dataNasc = dataNasc       
    }

    criarConta(){
        return new Conta(this)
    }
}

class Conta {
    #senha = "admin"
    #dono
    #saldo
    constructor(dono) {
        this.#saldo = 0;
        this.#dono = dono
    }

    //get sempre retorna algo
    // get saldo()    { 
    //     if( this.#saldo <= 300 )
    //          return this.#saldo;
    //     else
    //         return "Valor impede demonstração";
    // }

    //set é pra atualizar o valor
    // set saldo(valor)    {
    //     this.#saldo += valor;
    // }

    sacar(valorSaque, senha) {    
        if(valorSaque <= 0)
        {
            console.log("Não é possível sacar valor negativo")
            return false
        }    
        if(!this.validarSenha(senha))
        {
            console.log("Senha incorreta")
            return false
        }
        if ((this.#saldo - valorSaque) >= 0) {
            this.#saldo -= valorSaque
            return true
        }else
            {
                console.log("Saldo insuficiente")
                return false
            }

    }

    extrato(senha)
    {
        if(!this.validarSenha(senha))
        {
            console.log("Senha incorreta")
            return
        }
        console.log(`${this.#dono.nome}, seu saldo é ${this.#saldo}`)
    }

    depositar(valor,senha)//sobrecarga
    {
        if(!this.validarSenha(senha))
        {
            console.log("Senha incorreta")
            return
        }
        if(valor < 0){
            console.log("O valor depositado não pode ser negativo")
            return;
        }
        if(valor > 5000){
            console.log("Valor muito alto. Dirija-se ao caixa. Atendimento das 10:00h às 15:00hs")
            return;
        }
        this.#saldo += valor
    }

    depositoViaBC(saldo)
    {
        this.#saldo += saldo
    }

    validarSenha(senha)
    {
        return senha === this.#senha
    }
}

Jose = new Pessoa(126365, "José Silva", "10/10/88")
Manoel = new Pessoa(123654,"Manoel Costa", "10/10/10")

contaJose = Jose.criarConta()
contaManoel = Manoel.criarConta()
contaCopia = contaJose
//Fazer operação de transferência
contaJose.depositar(50, "admin")
contaManoel.depositar(150, "admin")
contaJose.extrato("admin")
contaManoel.extrato("admin")

// BC = new BancoCentral()
BancoCentral.transferirValor(contaJose, contaManoel, 40, "admin")

contaJose.extrato("admin")
contaManoel.extrato("admin")
contaCopia.extrato("admin")
contaCopia2 = contaCopia

contaCopia.depositar(1000,"admin")
console.log("---------------------------")
contaJose.extrato("admin")
contaManoel.extrato("admin")
contaCopia.extrato("admin")
console.log("--")
contaCopia2.extrato("admin")
