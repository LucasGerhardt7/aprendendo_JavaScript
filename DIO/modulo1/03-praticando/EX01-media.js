/* 

1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprema a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- média menor que 5, reprovação;
- média entre 5 e 7, recuperação;
- média acima de 7, passou de semestre;

*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A média é: " + media.toFixed(2));

if (media < 5) {
    console.log("REPROVADO");
} else if (media >= 5 && media <= 7) {
    console.log("RECUPERAÇÃO");
} else if (media > 7) {
    console.log("APROVADO");
}