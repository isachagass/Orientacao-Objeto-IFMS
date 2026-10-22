class Pessoa{
    #nome
    #cpf
    // #votos

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

class Candidato extends Pessoa{
    #numero

    constructor(nome, cpf, numero){
        super(nome, cpf)
        this.#numero = numero
    }

    get numero(){
        return this.#numero
    }
}


class Eleitor extends Pessoa{
    #titulo

    constructor(nome, cpf, titulo){
        super(nome, cpf)
        this.#titulo = titulo
    }

    get titulo(){
        return this.#titulo
    }

}


class Urna{
    #votos
    #candidatos

    constructor(){
        this.#votos = []
        this.#candidatos = []
    }

    cadastroCandidato(candidato){
        this.#candidatos.push(candidato)
    }

    votar(eleitor, numCandidato){
        const jaVotou = this.#votos.some( (v) => v.titulo == eleitor.titulo)
        if (jaVotou){
            console.log("Não é permitido votar mais de uma vez!")
            return false
        }

        const CandidatoExiste = this.#candidatos.find((c) => c.numero == numCandidato)
        if(!CandidatoExiste){
            console.log("Candidato não cadastrado!")
            return false
        }


        const novo_voto = new Voto(numCandidato, eleitor.titulo)
        this.#votos.push(novo_voto)
        console.log("Voto realizado com sucesso!")
        return true

    }

    listar(){
        for(const i of this.#votos){
            console.log(`\nTitulo:${i.titulo}\nVoto:${i.id_candidato}`)
        }
    }

    apuracao(){
        for (const i of this.#candidatos){
            const num_votos = this.#votos.filter(v => v.id_candidato == i.numero).length

            console.log(`${i.nome} (${i.numero}): teve ${num_votos} votos`)
        }
        
    }
}

class Voto{
    #id_candidato
    #titulo_eleitor

    constructor(id_candidato, titulo){
        this.#id_candidato = id_candidato
        this.#titulo_eleitor = titulo
    }

    get id_candidato(){
        return this.#id_candidato
    }

    get titulo(){
        return this.#titulo_eleitor
    }

}

urna = new Urna()

candidato1 = new Candidato("C-1", "12344", "13")
candidato2 = new Candidato("C-2", "12366", "17")

eleitor1 = new Eleitor("E-1", "33455", "101")
eleitor2 = new Eleitor("E-2", "3377", "103")

urna.cadastroCandidato(candidato1)
urna.cadastroCandidato(candidato2)

urna.votar(eleitor1, "13")
urna.votar(eleitor1, "13")


urna.apuracao()