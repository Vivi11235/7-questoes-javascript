/*Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.*/

function exercicio2(){
    
    document.write(`Questão 2: </br></br>`);

    let alturaPedro = Number.parseFloat(1.5);
    
    let alturaLucas = Number.parseFloat(1.1);
    
    let ano = 0;
    
    while(alturaLucas<=alturaPedro){
        alturaPedro+=0.02;
        alturaLucas+=0.03;
    
        ano++;
        console.log(alturaLucas.toFixed(2));
        console.log(alturaPedro.toFixed(2));
    
        if(alturaLucas.toFixed(2)==alturaPedro.toFixed(2)){
            document.write(`São necessários ${ano} anos para Lucas e Pedro terem a mesma altura. Neste ponto Pedro terá ${alturaPedro.toFixed(2)} m de altura e Lucas terá ${alturaLucas.toFixed(2)} m de altura.</br></br>`);   
        }
    
        if(alturaLucas.toFixed(2)>alturaPedro.toFixed(2)){
            document.write(`São necessários ${ano} anos para Lucas ser mais alto que Pedro. Neste ponto Pedro terá ${alturaPedro.toFixed(2)} m de altura e Lucas terá ${alturaLucas.toFixed(2)} m de altura.</br></br>`); 
        }
    }
}

