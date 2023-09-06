/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;
    
Imprima no console o valor que será gasto para realizar esta viagem.
 */


let combustivel = 5.79; /* Reais */
let kmPorLitro = 10; /* km */
let distancia_KM = 100;/* Distancia da viagem em KM */

let litrosConsumidos = distancia_KM / kmPorLitro;
let despesa = litrosConsumidos * combustivel;

console.log(despesa.toFixed(2)); /* toFixed() adiciona a quantidade de casas decimais */