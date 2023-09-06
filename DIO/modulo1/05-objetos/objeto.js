const Lucas = {
    nome: "Lucas",
    sobrenome: "Gerhardt",
    anoNascimento: 1998,
    descrever: function(){//Uma função dentro de um objeto é chamado de método
        console.log(`Ola meu nome é ${this.nome} e minha idade é ${2023 - this.anoNascimento}`);//usa crase para usar o ${}
    }
};

Lucas.descrever();

Lucas.altura = 1.80;//adiciona um elemento

delete Lucas.nome;//Deleta um elemento

console.log(Lucas.nome);//foi deletado acima
console.log(Lucas.sobrenome);
console.log(Lucas.anoNascimento);
console.log(Lucas);