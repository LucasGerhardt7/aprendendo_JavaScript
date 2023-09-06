/* 
    1) Faça um programa que receba a média de um aluno.

        Caso a média seja < 5 imprima 'Reprovado'.
        Caso a média seja >= 5 e < 7 imprima 'Recuperação'.
        Caso a média seja >= 7 imprima 'Aprovado'.
    
        Exemplo: 
            Entrada:
                5.5
            Saída:
                Recuperação
*/

const { gets, print } = require('./funcoesAuxiliares.js');
let nota = gets();

if (nota >= 0 && nota < 5) {
    print(`A nota foi ${nota} e está REPROVADO!`)
} else if (nota >= 5 && nota < 7) {
    print(`A nota foi ${nota} e está de RECUPERAÇÃO!`)
} else if (nota >= 7) {
    print(`A nota foi ${nota} e está APROVADO!`)
} else {
    print('Numero inválido');
}
