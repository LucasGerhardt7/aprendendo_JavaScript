/* 
    3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionario.

    - Para realizar o calculo, receba o valor bruto do salário e o adicional dos beneficios.
    - O salário a ser transferido é calculado da seguinte maneira:

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

    - Para calcular o percentual de imposto segue as aliquotas:

    De R$0.00 a R$1100.00 = 5.00%
    De R$1100.01 a R$2500.00 = 10.00%
    Maior que  R$2500.00 = 15.00%
    
    Exemplo:
        Entrada:
            2000.00
            250.00

        Saída:
            2050.00
*/
const { gets, print } = require('./funcoesAuxiliares');

const valorBruto = gets();
const beneficios = gets();
let imposto = null;
let salario = null;

if (valorBruto <= 1100) {
    imposto = 5;
} else if (valorBruto > 1100 && valorBruto <= 2500) {
    imposto = 10;
} else if (valorBruto > 2500) {
    imposto = 15;
} else {
    console.log('ERRO na variável valorBruto');
}

salario = valorBruto - ((imposto / 100) * valorBruto) + beneficios;

print(salario);