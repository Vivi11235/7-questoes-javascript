/*Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.*/

function exercicio7(){

    let valores = [];
    let negativos = 0;
    let positivos = 0;
    let soma = 0;
    let media = 0;
    let percentual_1 = 0;
    let percentual_2 = 0;

    for(let i=0;i<=9;i++){
        valores[i] = Number.parseFloat(prompt(`Digite o ${i+1}º número.`));
        soma+=valores[i];

        if(valores[i]>0){
            positivos++;
        }else if(valores[i]<0){
            negativos++;
        }
    }

    media = soma/10;
    percentual_1 = (positivos*100)/10;
    percentual_2 = (negativos*100)/10;

    alert(`A média aritmética dos valores lidos é: ${media}.`);
    alert(`A quantidade de valores positivos é ${positivos}.`);
    alert(`A quantidade de valores negativos é ${negativos}.`);
    alert(`O percentual de valores positivos é ${percentual_1}%.`);
    alert(`O percentual de valores negativos é ${percentual_2}%.`);

}