// Object.freeze(leao)
// impede: alterar, add ou deletar atributo 

// verificar: retorna true or false
// Object.isFrozen(leao)

// Object.seal(leao)
// permite somente alterar valores dos atributos existentes
// impede add ou deletar atributos

// verificar --> retorna true or false
// Object.isSealed(leao)

// Object.preventExtensions(leao)
// impede: add novos atributos
// permite alterar ou deletar atributos ja existentes

// verificar: retorna true or false
// Object.isExtensible(leao)

// typeof leao
// retona o tipo que aquele valor tem
// ex: object, string, number, bool

// JSON.stringify(leao)
// transforma o valor em uma string em formato de json

// const leao = {
//     nome: "Simba",
//     idade: 5,
//     habitat: "Savana",
//     alimentacao: "Carnívoro"
// }

// console.log(JSON.stringify(leao, ["nome"],2))
// pode receber 3 parametros, o valor js, replacer (filtro ou funcao), spacer(indentação da apresentação) 

// Classe.prototype
// retrona a classe que essa classe é isntanciada - a herança dela