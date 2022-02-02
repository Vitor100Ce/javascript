function areaQuadrado(lado){
  return lado / 2;

}

console.log(areaQuadrado(10));  


function pi(){
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(76, 1.74));


function corFavorita(cor){
  if(cor === 'azul'){
    return 'Olhe para o céu';
  } else if (cor === 'verde'){
    return 'Olhe para a floresta'
  } else{
    return 'Essa cor não é correta ou não foi escolhida nenhuma cor'
  }
}


addEventListener('click', function(){
  console.log('Clicou')
});



function imc2(peso, altura) {
  var imc = peso / (altura * altura);
  console.log(imc);
}

imc2(80, 1.80);

function terceiraIdade(idade){
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor, preecha com um número';
  } 
  else if (idade >= 60){
    return true;
  } else{
    return false;
  }
}

console.log(terceiraIdade(55));


function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(30));



var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro