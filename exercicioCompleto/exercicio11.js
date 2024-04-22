//Conte quantos números pares e ímpares existem de 1 até <um número fornecido 
//pelo usuário>

let NumeroUsuario = Number(prompt('digite um numero: '))
let pares = 0
let impares = 0
for(let i = 1; i <= NumeroUsuario; i++){
    if(i % 2 === 0){
        pares = pares + 1
    }
    if(i % 2 !== 0)
    impares = impares + 1
}alert(`quantidade de numeros pares: ${pares}
quantidade de numero impares: ${impares}`)