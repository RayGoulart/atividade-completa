for (let numero = 2; numero <= 50; numero++) {
    let numeroprimo = true; // Suposição de que o número é primo até que seja provado o contrário

    // Verifica se o número atual é primo
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            numeroprimo = false; // Se for divisível por algum número além de 1 e ele mesmo, não é primo
            break;
        }
    }

    // Imprime o número se for primo
    if (numeroprimo) {
        console.log(numero);
    }
}