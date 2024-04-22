function calcularFatorial() {

    
    let numero = parseInt(document.getElementById('numero').value);

   
    if (numero < 0) {
        alert("Por favor, digite um número não negativo.");
        return;  
    }

    // Calcula o fatorial
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    // Exibe o resultado
    alert("O fatorial de " + numero + " é: " + resultado);
}