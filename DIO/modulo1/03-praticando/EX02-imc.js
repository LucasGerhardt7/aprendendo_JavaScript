/* 
2) o IMC (Indice de massa corporal) é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaizo.

IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - entre 18.5 e 25. Peso normal;
 - entre 25 e 30 Acima do peso;
 - entre 30 e 40 Obeso;
 Acima de 40 Obesidade Grave;

*/

const peso = 90;
const altura = 1.85;

const imc = peso / (altura * altura);

console.log("Seu IMC é " + imc.toFixed(2));


 if (imc < 18.5) {
    console.log("Abaixo do peso");
 }else if (imc >= 18.5 && imc <= 25) {
    console.log("Peso normal");
 }else if (imc >= 25 && imc <= 30) {
    console.log("Acima do peso");
 }else if (imc >= 30 && imc <= 40) {
    console.log("Obeso");
 }else if (imc > 40) {
    console.log("Obesidade grave");
 }else{
    console.log("imc inválido!!!");
 }