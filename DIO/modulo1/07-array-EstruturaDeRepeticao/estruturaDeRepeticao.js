const notas = [];

notas.push(10);
notas.push(7);
notas.push(8);
notas.push(4);
notas.push(9);



console.log(notas);
console.log(`O tamanhdo da lista é: `+ notas.length);

/* 
    ++++++++++++++++++++++++++++++++
                FOR LOOP
    +++++++++++++++++++++++++++++++
*/
//  É dividido em 3 partes;
//  Primeira parte trata da variavel que vai fazer a iteração, ou seja vai controlar quantas vezes ja fizemos o loop.
//  A segunda parte é uma condicional que retorna um boolean. Se der True, executa o bloco, se der False, sai do loop.
//  A terceira parte é oque acontece depois de executar o block. É a iteração da variavel de controle (index).
for(let i = 0; i < 10; i++){
    console.log(i);
}

//Uma String é uma lista
const nome = 'Lucas Gerhardt Rodrigues';
//pegando cada caracter da string
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}