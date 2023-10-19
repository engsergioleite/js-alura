function soma(n1, n2=0){ //atribuir 0 para funcionar caso nao seja passado o numero ao chamar a função.
    return n1+n2
    }
console.log(soma(2,3))

//FUNÇÃO COM STRING E NUMERO
function nomeIdade (nome, idade){
    return `Meu nome é ${nome} e a minha idade é ${idade}`
}
console.log(nomeIdade("Sergio", 40))


//FUNÇÂO DENTRO DE FUNÇÃO
function multiplica(n1, n2){
    return n1 * n2 
}
console.log(multiplica(2,3))

//FUNÇÂO DENTRO DE FUNÇÃO
console.log(multiplica(soma(2,3), soma(3,4)))
