//Faça um programa que calcule o valor da série: 1 + 1/2 + 1/3 + ... + 1/10.

soma = 0

for(let i = 1; i <= 10; i++){
    soma = soma + 1 / i
    
}console.log('o valor da série é: '+ soma)