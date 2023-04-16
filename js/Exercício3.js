/*Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...*/

function exercicio3(){

    document.write(`Questão 3:</br></br>`);

    let multiplicando = Number.parseInt(prompt("Digite o número do qual deseja ver a tabuada: "));
    
    let iteracoes = Number.parseInt(prompt("Digite a quantidade de iterações: "));
    
    for(let i = 0;i<=iteracoes;i++){
        let resultado = i*multiplicando;
    
        document.write(`${i}x${multiplicando} = ${resultado}.</br></br>`);
    }
}
