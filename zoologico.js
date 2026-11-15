class Animais{
    nome
    idade
    habitat
    
    constructor(nome,idade, habitat){
        this.nome = nome
        this.idade = idade
        this.habitat = habitat
    }

    apresentar(){
        console.log(`
Nome: ${this.nome}
Idade: ${this.idade}
Habitat: ${this.habitat}
Especie: ${this.identificar_especie()}
        `)
        // chama o metodo criado para saber a especie
    }

    identificar_especie(){
        // instanceof serve para saber se esse objeto foi instanciado de qual classe
        // e não precisar armazenar essa informação em na memoria
        if (this instanceof Mamifero){
            return "Mamifero"
        } 
        if (this instanceof Ave){
            return "Ave"
        }
        if (this instanceof Peixe){
            return "Peixe"
        }
    }
}

class Mamifero extends Animais{
    // quando você não declara um construtor na classe filha, o JavaScript cria um construtor padrão que repassa os argumentos para a classe pai.

    // constructor(nome, idade, habitat){
    //     super(nome, idade, habitat)
    // }

    // só precisa declarar um construtor quando a classe filha tiver alguma particularidade na inicialização. algum atributo a mais

}

class Ave extends Animais{}
class Peixe extends Animais{}

class Leao extends Mamifero{}
class Leoa extends Mamifero{}
class Macaco extends Mamifero{}

class Sardinha extends Peixe{}
class Tucunare extends Peixe{}

class Pardal extends Ave{}
class Aguia extends Ave{}

class Jaula{
    id
    especie
    animais = []

    constructor(id, especie){
        this.id = id
        this.especie = especie
    }

    adicionar_animal(animal){
        if (animal instanceof this.especie){
            this.animais.push(animal)
            console.log(animal.nome,"inserido na jaula")
            return
        }
        else{
            console.log(animal.nome,"não aceito na jaula")
            return
        }
    }
}

class Secao{
    id
    tipoAnimal
    jaulas = []

    constructor(id, tipo){
        this.id = id
        this.tipoAnimal = tipo
    }

    adicionar_jaula(jaula){
        if (jaula.especie.prototype instanceof this.tipoAnimal){
            console.log(`Jaula ${jaula.id} inserida na Seção ${this.id}`)
            this.jaulas.push(jaula)
        }
        else{
            console.log(`Jaula ${jaula.id} não pode ser inserida na Seção ${this.id}`)
        }
    }

}

class Zoologico{
    nome
    secoes = []

    constructor(nome){
        this.nome = nome
    }

    adicionar_secao(secao){
        this.secoes.push(secao)
        console.log(`Secao ${secao.id} cadastrada no ${this.nome}`)
    }

    listar_animas_por_especie(especie){
        let animais = []

        for (const secao of this.secoes){
            for (const jaula of secao.jaulas){
                
                if (jaula.especie == especie){
                    for (const animal of jaula.animais){
                        animais.push(animal)

                    }
                }
                
            }
        }

        return animais
    }

    listar_animais_por_secao(id_secao){
        let animais = []

        const secao = this.secoes.find(secao => secao.id == id_secao)

        if(!secao){
            console.log("Secao não encontrada")
            return
        }

        for (const jaula of secao.jaulas){
            for ( const animal of jaula.animais){
                animais.push(animal)
            }
        }

        return animais
    }

    listar_secao_por_tipo(tipo){
        return this.secoes.find(secao => secao.tipoAnimal == tipo)
        
    }
}

const leao = new Leao("Leão", 5, "Savana");
const leoa = new Leoa("Leoa", 4, "Savana");
const macaco = new Macaco("Macaco", 3, "Floresta");

const sardinha = new Sardinha("Sardinha", 1, "Água salgada");
const tucunare = new Tucunare("Tucunaré", 2, "Água doce");

const pardal = new Pardal("Pardal", 1, "Floresta");
const aguia = new Aguia("Águia", 6, "Montanhas");

const jaulaLeoes = new Jaula(1, Leao)
const jaulaMacacos = new Jaula(2, Macaco)
const jaulaLeoas = new Jaula(3, Leoa)
const jaulaSardinhas = new Jaula(4, Sardinha)

jaulaLeoes.adicionar_animal(leao)
jaulaLeoas.adicionar_animal(leoa)
jaulaMacacos.adicionar_animal(macaco)
jaulaSardinhas.adicionar_animal(sardinha)

const secaoMamiferos = new Secao(1, Mamifero)
const secaoPeixes = new Secao(2, Peixe)


secaoMamiferos.adicionar_jaula(jaulaLeoes)
secaoMamiferos.adicionar_jaula(jaulaMacacos)
secaoMamiferos.adicionar_jaula(jaulaSardinhas)

secaoPeixes.adicionar_jaula(jaulaSardinhas)

const zoologico = new Zoologico("Zoo")
zoologico.adicionar_secao(secaoMamiferos)
zoologico.adicionar_secao(secaoPeixes)

console.log("\nRELATORIO DE ANIMAIS POR ESPECIE - LEAO")
console.log(JSON.stringify(zoologico.listar_animas_por_especie(Leao), null, 2))

console.log("\nRELATORIO DE ANIMAIS POR SECAO - SECAO 1")
console.log(JSON.stringify(zoologico.listar_animais_por_secao(1), null, 2))

console.log("\nRELATORIO DE SECOES POR TIPO - MAMIFERO")
console.log(JSON.stringify(zoologico.listar_secao_por_tipo(Mamifero), null, 2))

