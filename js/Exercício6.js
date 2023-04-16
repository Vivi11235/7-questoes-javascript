/*Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
Numero primo: deve ser maior que 1 e divisível por si mesmo e por 1.*/

function exercicio6(){

    for (let i = 30; i > 1; i--) {
    let numeroPrimo = true
    
    for (let n = 2; n <= i; n++) {
        if (i !== n && i % n === 0) {
        numeroPrimo = false
        break;
        }
    }

    if (numeroPrimo) {
    document.write(`[${i}] `)
    }else{
    document.write(`${i} `)
    }
    }
}
