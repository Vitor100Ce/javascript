// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 26;
var maeIdade = 46;

if(minhaIdade > maeIdade){
    console.log('É maior');
} else if(minhaIdade < maeIdade){
    console.log('É menor');
} else{
    console.log('É igual');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//Resposta: 3
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
//true
var idade = 28;
//true
var possuiDoutorado = false;
//false
var empregoFuturo;
//false
var dinheiroNaConta = 0;
//false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil maior');
} else if (brasil < china){
    console.log('China maior');
} else{
    console.log('Ambos países iguais');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}