/*Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;*/

function exercicio1(){
    
    document.write(`Questão 1: </br></br>`);

    let alturas = [];
    
    let maiorAltura = 0;
    let menorAltura = 3;
    
    for (let i=1;i<=15;i++){
        alturas[i]=Number.parseFloat(prompt(`Digite a altura da ${i}ª pessoa.`));
        
        if(alturas[i]>maiorAltura){
            maiorAltura=alturas[i];
        }
        
        if(alturas[i]<menorAltura){
            menorAltura=alturas[i];
        }
    }
    
    document.write(`A maior altura é ${maiorAltura}.</br></br>`);
    
    document.write(`A menor altura é ${menorAltura}.</br></br>`);
}

