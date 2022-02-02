// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let anosGanhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(ano = 0; ano < anosGanhou.length; ano++){
    console.log(`O Brasil ganhou a copa de ${anosGanhou[ano]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta])
    if(frutas[fruta] === 'Pera'){
        console.log('Encontrou a pera')
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let last = frutas.length-1
let lastFruit = frutas[last]
console.log(lastFruit)
