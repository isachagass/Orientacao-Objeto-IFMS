class Conta{
    dono
    #saldo
    #senha

    //  # funciona como um private que não deixa o usuario atribui valor direto, só por meio de metodos

    constructor(){
        this.#saldo = 200;
        this.#senha = '1234'
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

    validar_senha(senha){
        return senha == this.#senha //vai retornar um bool
    }


}

minhaconta = new Conta()
// minhaconta.#saldo += 200
minhaconta.sacar(50, "1234")
// minhaconta.sacar(250)
// console.log(minhaconta) 
// minhaconta.extrato()
// minhaconta.depositar(700)
minhaconta.extrato('1234')