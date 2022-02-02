// Crie uma função para verificar se um valor é Truthy

function verificaTrue(valor){
    if(!!valor === true){
        return 'True';
    } else{
        return 'False';
    }
}

console.log(verificaTrue(45));


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuad(l1,l2,l3,l4){
    return l1 + l2 + l3 + l4;
}

console.log(perimetroQuad(2,2,2,2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobreNome){
    return `${nome} ${sobreNome}`
}

console.log(nomeCompleto('Vitor', 'Ramos'))

// Crie uma função que verifica se um número é par

function verificaPar(valor){
    if(valor % 2 === 0){
        return 'É par';
    } else{
        return 'E ímpar';
    }
}

console.log(verificaPar(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificaDado(dado){
    return typeof dado;
}

console.log(verificaDado('ok'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
    console.log('Vitor Ramos')
})


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  
