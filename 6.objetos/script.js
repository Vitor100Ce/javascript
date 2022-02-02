// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let pessoa = {
  nome: 'Vitor',
  sobreNome: 'Ramos',
  idade: 26,
  nomeCompleto(){
    return `${this.nome} ${this.sobreNome}`
  },
}

console.log(pessoa.nomeCompleto())

// Crie um método no objeto anterior, que mostre o seu nome completo



// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,

  late(viu){
    if(viu === 'Sim'){
      return 'Latiu';
    } else{
      return 'Não latiu';
    }
  },
}

console.log(cachorro.late('Não'));
