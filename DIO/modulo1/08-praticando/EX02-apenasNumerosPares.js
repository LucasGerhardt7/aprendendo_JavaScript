/* 
    Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero PAR encontrado.
*/


const numeros = [1,6,3,7,10,3,8,2,5,4,8,5,3,2,5,75,23,25,67,967,4532,34,7545,8];
console.log('Os numeros PARES são:');

for(let i = 0; i < numeros.length; i++){
    let numero = numeros[i];
    if(numero % 2 == 0){
        console.log(numero);
    }
}