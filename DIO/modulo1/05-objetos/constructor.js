class pessoa {
    nome;
    idade;
    dataNasc;

    //O método construtor é a primeira coisa que acontece quando se cria uma instãncia e nos permite passar parâmetros ao instanciar uma classe.
    constructor(nome, idade){
        const ano = new Date;
        this.nome = nome;
        this.idade = idade;
        this.dataNasc = ano.getFullYear() - idade;
    }
}


function comparaPessoa(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
    }else if(pessoa2.idade > pessoa1.idade){
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);
    }else{
        console.log(`${pessoa1.nome} e ${pessoa2.nome} possuem a mesma idade`);
    }
}
const lucas = new pessoa('Lucas',25);
const leticia = new pessoa('Leticia',24);

console.log(lucas);
console.log(leticia);
comparaPessoa(lucas,leticia);