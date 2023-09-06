/* 
    2) Faça um programa que receba N (quantidade de numeros) e seus respectivos valores 

    Imprima o maior número par e o menor número ímpar.

    Exemplo:
        Entrada:
            5   
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número ímpar: 1
*/
const { gets, print } = require('./funcoesAuxiliares');
const tamanho = gets();
let numero = gets()


let maiorPar = null;
let menorImpar = null;


for (let i = 0; i < tamanho; i++) {
    print(numero);
    if (numero % 2 === 0) { //Se for par...
        if (maiorPar === null){ //Verificação que atribui o valor par à variável pela primeira vez ()
            maiorPar = numero;
        }
        if (numero > maiorPar){
            maiorPar = numero;
        }
       
    }
    if (numero % 2 === 1) {// Se for impar...
        if (menorImpar === null){
            menorImpar = numero;
        }
        if(numero < menorImpar){
            menorImpar = numero;
        }
    }

    numero = gets();
}
print('Maior número par: ' + maiorPar);
print(`Menor número impar: ${menorImpar}`);