class pessoa {
    nome;
    nasc;

    descrever(){//O método dentro da classe não precisa da palavra function
        console.log(`Ola meu nome é ${this.nome} e minha idade é ${2023 - this.nasc}`);//usa crase para usar o ${}
    }
}
const leticia = new pessoa();//Instância da classe pessoa
const lucas = new pessoa();//Outra instância da classe pessoa
lucas.nome = "Lucas";
lucas.nasc = 1998;

console.log(lucas);
console.log(leticia);