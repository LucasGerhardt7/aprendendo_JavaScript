const pessoa = {
    nome: 'Lucas',
    idade: 25
};

//let nome = pessoa.nome;
let {nome: meuNome, idade} = pessoa;

console.log(meuNome + idade);