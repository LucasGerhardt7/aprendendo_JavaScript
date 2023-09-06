/* 
= é atribuição;
== é comparação (permite comparar numero com string)
=== é comparação (compara os tipos tbm, não permitindo a comparação entre numero e string)

1 == '1'  ---> TRUE
1 === '1' ---> FALSE

*/

const camisetaLucasPreta = true;
const camisetaLucasVermelha = false;


let numero = 50;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);
console.log('=====================');

if(numeroPar){
    console.log('Par');
}

if(!numeroPar){
    console.log('Impar');
}