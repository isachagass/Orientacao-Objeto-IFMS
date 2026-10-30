/*Atividade Avaliativa: Orientação a Objetos (Valor: 2,0 pontos)
Objetivo:
Modelar e implementar um sistema orientado a objetos aplicando conceitos estudados até o momento. 

Descrição do Problema
Você deve projetar e implementar a estrutura de um veículo e sua linha de montagem seguindo rigorosamente as especificações abaixo:

1. Chassi (Imutabilidade)
O carro deve possuir um Chassi. O código do chassi é atribuído exclusivamente no momento da fabricação e nunca poderá ser alterado. O sistema deve permitir apenas a leitura dessa informação.

2. Composição e Restrições Estruturais (Rodas e Motor)
O carro deve ser composto por 4 rodas ativas (independentes) e 1 roda reserva (estepe). O sistema deve garantir a alocação máxima que o veículo mantenha a restrição exata de 4 rodas em uso e apenas 1 estepe.
Deve ser possível substituir qualquer uma das rodas ativas por uma nova roda, bem como realizar a troca entre uma roda ativa e o estepe.
O carro também deve conter um Motor com um código identificador específico.

3. Alteração de Cor
O carro é fabricado com uma cor inicial. A cor do carro só pode ser alterada se o método de alteração for acionado 3 vezes consecutivas solicitando a mesma cor.
Se uma cor diferente for solicitada antes da terceira tentativa, a contagem para a cor anterior é cancelada e o processo recomeça para a nova cor.

4. Fábrica de Carros 
A criação individual dos componentes (Chassi, Motor, Rodas, Estepe) e a montagem do veículo devem ser responsabilidade de uma classe Fábrica de Carros.

O cliente não deve montar as partes manualmente; ele deve solicitar o carro pronto à fábrica.

5. Controle de Acesso
As partes do carro montado devem ser acessíveis para leitura, garantindo que objetos externos não consigam alterar a estrutura interna (como adicionar ou remover rodas diretamente da lista) sem passar pelos métodos autorizados do veículo.

Requisitos de Entrega
Implementação das classes do domínio (Carro, Chassi, Motor, Roda) com modificadores de acesso adequados.

Implementação da classe FabricaDeCarros.

A criação do carro via fábrica.

A tentativa (e efetivação) de mudança de cor após 3 chamadas seguidas.

A leitura do chassi (comprovando a impossibilidade de alteração).

A troca de uma roda ativa pelo estepe.*/


class Chassi{
    #numero_chassi

    constructor(){
        this.#numero_chassi = "12345"
    }

    get numero_chassi(){
        return this.#numero_chassi
    }
}

class Roda{

    constructor(status){

    }

}

class Motor{
    #id


    constructor(){
        this.#id = "1111"
  
    }

    get id(){
        return this.#id
    }

    
}

class FabricaDeCarros{
    static fabricar_carro(){
        const chassi = new Chassi()

        const rodas = []

        for (let i = 0; i<4; i++){
            rodas.push(new Roda())
        }

        const estepe = new Roda()

        const motor = new Motor()

        const novo_carro = new Carro(rodas, estepe, chassi, motor)

        console.log("Caro criado")

        return novo_carro

    }
     



}

class Cliente{
    #nome
    #cpf

    constructor(nome, cpf){
        this.#nome = nome
        this.#cpf = cpf
    }

    get nome(){
        return this.#nome
    }

    get cpf(){
        return this.#cpf
    }


}

class Carro{
    #rodas
    #estepe
    #chassi
    #motor
    #mudanca_cor
    #tentativas
    #cor_atual


    constructor(rodas, estepe, chassi, motor){
        this.#motor = motor
        this.#chassi = chassi
        this.#estepe = estepe
        this.#mudanca_cor = 0
        this.#tentativas = 0
        this.#cor_atual = "preto"
        this.#rodas = rodas
    }

    get rodas(){
        return this.#rodas
    }

    get estepe(){
        return this.#estepe
    }

    get chassi(){
        return this.#chassi
    }

    get motor(){
        return this.#motor
    }

    get mudanca_cor(){
        return this.#mudanca_cor
    }

    get tentativas(){
        return this.#tentativas
    }

    get cor_atual(){
        return this.#cor_atual
    }

    trocar_cor(cor){
        if (cor == this.#mudanca_cor){
            this.#tentativas += 1
            if (this.#tentativas < 3){
                console.log("Tentativa armazenada")
                return
            }
            if (this.#tentativas == 3){
                this.#cor_atual = cor
                this.#tentativas = 0
                this.#mudanca_cor = cor
                console.log("Cor alterada")
                return
            }
        } else {
            this.#tentativas = 1
            this.#mudanca_cor = cor
            console.log("Nova tentativa")
            return
        }
    }

    mudanca_estepe(indice){

        if (indice < 0 || indice >= this.#rodas.lenght){
            console.log("Inidice invalido")
            return
        }


        let temporario = this.#estepe

        this.#estepe = this.#rodas[indice]

        this.#rodas[indice] = temporario


        console.log("Roda trocada pela nova")
        return
    
     
    }
}

isa = new Cliente("isa", "1234567889")

CarroIsa = FabricaDeCarros.fabricar_carro()

console.log("Chassi do Carro:",CarroIsa.chassi.numero_chassi)
console.log("Numero do motor:", CarroIsa.motor.id)
// console.log("Status da Roda 1:", CarroIsa.roda1.status)
// console.log("Status do Estepe:", CarroIsa.estepe.status)

CarroIsa.trocar_cor("vermelho")
console.log("Cor atual:", CarroIsa.cor_atual)

CarroIsa.trocar_cor("vermelho")
console.log("Cor atual:", CarroIsa.cor_atual)

// CarroIsa.trocar_cor("rosa")
// console.log("Cor atual:", CarroIsa.cor_atual)

CarroIsa.trocar_cor("vermelho")
console.log("Cor atual:", CarroIsa.cor_atual)


CarroIsa.mudanca_estepe(1)
CarroIsa.mudanca_estepe(2)
