//const, var, let
const constNome = 'Lucas';

//Objeto literal (que recebe o valor direto, sem precisar de classe);
const objetoNome ={nome:'Lucas', idade:25};//chave e valor

//Lista ou Array   0        1       2
const alunos = ['Lucas', 'João', 'Maria'];
/* =========================================================
*/






console.log(`Lista Original:`);
console.log(alunos);



//Adicionar na lista
alunos.push('Renan');//add dinamicamente no final da lista
alunos[4] = 'Vitor'; //add diretamente na posição
console.log(`Adicionando na lista:`);

console.log(alunos);

//Remover da lista
//pop retira o ultimo da lista
console.log(`Vou tirar o ultimo da lista(${alunos.pop()})  com o pop`);
console.log(alunos);
//shift tira o primeiro da lista
console.log(`Vou tirar o primeiro da lista(${alunos.shift()})  com o shift`);
console.log(alunos);
//deleta e deixa o espaço vazio
console.log(`Vou apagar um nome da lista(${alunos[1]})  com o delete`);
delete alunos[1];
console.log(alunos);
