class Conta{
    #dono
    #saldo
    #senha

    //  # funciona como um private que não deixa o usuario atribui valor direto, só por meio de metodos

    constructor(dono){
        this.#saldo = 200;
        this.#senha = '1234'
        this.#dono = dono
    }


    // get sempre retorna algo
    // set sempre atualiza o valor
    // torna a variavel privada em publica com controle

    get saldo()
    {
        if (this.#saldo <= 3)
            return this.#saldo;
        else
            return "valor impede demonstração";
    }

    set saldo(valor)
    {
        this.#saldo += valor;
    }

    sacar(valorSaque, senha){
        if((this.#saldo - valorSaque) >= 0 && this.#senha == senha){
            this.#saldo -= valorSaque
        }else{
            console.log("Saldo insuficiente")
            return
        }

    }

    extrato(senha){
        if(this.#senha == senha){

            console.log(this.#saldo)
        }
    }

    depositar(valor, senha){
        // if(this.#senha != senha){
        //     console.log("senha incorreta")
        //     return;
        // }
        if(!this.validar_senha(senha)){ //chamando o metodo
            console.log("senha incorreta")
        //     return;
        }
        if(valor < 0){
            console.log("Não é possivel fazer um deposito negativo")
            return;
        }
        if(valor > 5000){
            console.log("Não é possivel fazer um deposito maior que 5000")
            return;
        }
        this.#saldo += valor
        
    }

    // add_dono(dono, senha){
    //     if(!this.validar_senha(senha)){
    //         return "Senha incorreta"
    //     }else{
    //         this.dono = dono
    //     }

    // }

    validar_senha(senha){
        return senha == this.#senha //vai retornar um bool
    }



}

// minhaconta = new Conta()
// minhaconta.#saldo += 200
// minhaconta.sacar(50, "1234")
// minhaconta.sacar(250)
// console.log(minhaconta) 
// minhaconta.extrato()
// minhaconta.depositar(700)
// minhaconta.extrato('1234')

class Pessoa{
    nome
    cpf
    telefone
    #idconta

    constructor(nome,cpf, telefone){
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }
    // colocar um metodo que cria uma nova conta aqui dentro

}

pessoa1 = new Pessoa("isa", "12312312312", "12121212")
// console.log(pessoa1)
// minhaconta.add_dono(pessoa1, '1234')
// console.log(minhaconta)
conta_pessoa1 = new Conta(pessoa1)

console.log(pessoa1)
console.log(conta_pessoa1)
