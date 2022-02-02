var pessoa = {
    nome: 'Vitor',
    idade: 26
}

console.log(pessoa.nome)

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado
    }
}

console.log(quadrado.area(7));
console.log(quadrado.perimetro(9));


console.log(Math.random());

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeigth(){
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor);

var bg = menu.backgroundColor;
