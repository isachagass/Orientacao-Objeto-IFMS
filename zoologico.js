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
        // ele retorna true ou false
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


const leao = new Leao("Leão", 5, "Savana");
const leoa = new Leoa("Leoa", 4, "Savana");
const macaco = new Macaco("Macaco", 3, "Floresta");

const sardinha = new Sardinha("Sardinha", 1, "Água salgada");
const tucunare = new Tucunare("Tucunaré", 2, "Água doce");

const pardal = new Pardal("Pardal", 1, "Floresta");
const aguia = new Aguia("Águia", 6, "Montanhas");

leao.apresentar()
