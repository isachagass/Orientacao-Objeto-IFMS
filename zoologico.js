class Animais{
    nome
    especie
    
    constructor(nome, especie){
        this.nome = nome
        this.especie = especie
    }

    apresentar(){
        console.log(`Nome: ${this.nome} \nEspecie: ${this.especie}`)
    }
}

class Mamifero extends Animais{

    constructor(nome){
        super(nome, "mamifero")
    }

}

class Ave extends Animais{
    
    constructor(nome){
        super(nome, "ave")
    }

}

class Peixes extends Animais{

    constructor(nome){
        super(nome, "peixe")
    }
}


const leao = new Mamifero("leao")
const leoa = new Mamifero("leoa")
const macaco = new Mamifero("macaco")

const sardinha = new Peixes("sardinha")
const tucunare = new Peixes("tucunare")

const pardal = new Ave("pardar")
const aguia = new Ave("aguia")

pardal.apresentar()

// class Leao extends Mamifero{}
