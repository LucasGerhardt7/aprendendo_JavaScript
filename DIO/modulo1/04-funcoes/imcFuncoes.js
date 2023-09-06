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

function CalcularImc(peso, altura){
    return peso / (altura * altura);
}
function ClassificarImc(imc){
    if (imc < 18.5) {
        return "Abaixo do peso";
     }else if (imc >= 18.5 && imc <= 25) {
        return "Peso normal";
     }else if (imc >= 25 && imc <= 30) {
        return "Acima do peso";
     }else if (imc >= 30 && imc <= 40) {
       return "Obeso";
     }else if (imc > 40) {
        return "Obesidade grave";
     }else{
        return "imc inválido!!!";
     }
}

/* 
    Funções Invocadas Imediatamente são aquelas que são cercadas de parênteses e não possuem nome.
    Assim elas não precisam e nem conseguem ser invocadas, são executadas apenas uma vez.
*/


//MAIN
(function (){
    const peso = 100;
    const altura = 1.85;

    const imc = CalcularImc(peso, altura);

    console.log("Seu IMC é " + imc.toFixed(2));
    console.log(ClassificarImc(imc));

})();


