

/* let ultimoItem = videoGames.pop();
videoGames.push('3DS');

console.log(ultimoItem);
console.log(videoGames.length);
console.log(videoGames); */

for(let numero = 0; numero <= 10; numero++){
    console.log(numero);
}

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}

let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for (item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'PS4'){
        console.log(`Achou o PS4`)
        break;
    }
}


videoGames.forEach(function(item, index, array){
    console.log(item, index, array)
})


