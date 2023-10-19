/*let x = ""
console.log(x)
x = "oi";
*/ 

//DECLARAÇÃO DE FUNÇÃO 

function imprimeTexto(texto) {
    console.log(texto)
}

    imprimeTexto("oi") //CHAMADA DA FUNÇÃO    
    imprimeTexto("imprime outro texto")

// OUTRA FORMA DE FUNÇÃO COM RETURN

function soma(){
    return 2+2;
}

console.log(soma())


//FUNÇÃO DENTRO DE UMA FUNÇÃO - USANDO A FUNÇÃO IMPRIME TEXTO

imprimeTexto(soma())