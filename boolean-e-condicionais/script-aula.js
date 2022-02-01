var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao) {
    console.log('É verdadeiro');
} else if(possuiDoutorado) {
    console.log('Possui doutorado');
} else{
    console.log('Não possui nada');
}

var nome = 'Vitor';
 if(nome){
     console.log(nome);
 } else{
     console.log('Nome não existe');
 }


 var x = 10;

 console.log(x !== '10');

 
 if((5 - 5) && (5 + 5)){
     console.log('Verdadeiro');
 } else {
     console.log('Falso');
 }

 var condicional2 = (5-5) || (5+5) || (10-2);

 console.log(condicional2)

var corFavorita = 'Verde';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Vermelho':
        console.log('Olha para marte');
        break;
    case 'Verde':
        console.log('Olha para a floresta');
        break;
        
        default:
            console.log('Não encontrada')
}
