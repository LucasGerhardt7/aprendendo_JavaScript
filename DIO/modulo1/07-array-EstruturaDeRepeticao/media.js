const notas = [];

notas.push(10);
notas.push(7);
notas.push(8);
notas.push(4);
notas.push(9);
notas.push(500);

let soma = 0;

for(let i = 0; i < notas.length; i++){
    let nota = notas[i];
    soma = soma + nota;
}

let media = soma / notas.length;
console.log(`A soma de todas as notas é ${soma}`);
console.log(`A media de todas as notas é ${media}`);
