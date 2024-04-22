let lista = [4, 7, 20, 2]

let maiorValor = lista[0]
let menorValor = lista[0]

for(let i = 0; i < lista.length; i++){ 
    if(lista[i] > maiorValor){
        maiorValor = lista[i];
        
     }
     if(lista[i] < menorValor){
        menorValor = lista[i];
       
     }
}
     console.log(maiorValor)
     console.log(menorValor)