//Faça um programa que calcule a média de uma lista de números.
let lista = [4, 6, 8, 2]

let qtdNumeros = 0
let somaQtdNumeros = 0
let media 


for(let i = 0; i < lista.length; i++){
    qtdNumeros = qtdNumeros + 1
    somaQtdNumeros = somaQtdNumeros + lista[i]
    media = somaQtdNumeros / qtdNumeros
    
}console.log(`${somaQtdNumeros} / ${qtdNumeros} = ${media} `)
console.log('A média da lista é: ' + media)