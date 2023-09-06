/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

    1 - Preço do Etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;
    
Imprima no console o valor que será gasto para realizar esta viagem.
 */

const gasolina = 5.79;/* reais */
const etanol = 4.40;/* reais */
const tipoCombustivel = 'etanol';
let precoCombustivel;

if(tipoCombustivel === 'gasolina'){
    precoCombustivel = gasolina;
}else if(tipoCombustivel === 'etanol'){
    precoCombustivel = etanol;
}else{
    console.log('Tipo de combustível inválido!!')
}

let kmPorLitro = 10; /* km */
let distancia_KM = 100;/* Distancia da viagem em KM */

let litrosConsumidos = distancia_KM / kmPorLitro;
let despesa = litrosConsumidos * precoCombustivel;

console.log(tipoCombustivel);
console.log(despesa.toFixed(2)); /* toFixed() adiciona a quantidade de casas decimais */