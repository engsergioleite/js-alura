
//FORMA TRADICIONAL DE FUNÇÃO

/*function apresentar(nome) {
    return `Meu nome é ${nome}`;
}
console.log(apresentar("sergio"))
*/ 

//ARROW-FUNCTION

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (n1, n2) => n1 + n2;

console.log(soma(3,4))

console.log(apresentarArrow("sergio"))

/*
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Escolha um numero menor"
    } else {
        return num1 + num2;
    }
    }

console.log(somaNumerosPequenos(80,90))
*/