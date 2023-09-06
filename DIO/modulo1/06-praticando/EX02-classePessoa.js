/* 
    Crie uma classe para representar uma pessoa.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José que diga o valor do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC(imc){
        if (imc < 18.5) {
            return ("Abaixo do peso");
         }else if (imc >= 18.5 && imc <= 25) {
            return ("Peso normal");
         }else if (imc >= 25 && imc <= 30) {
            return ("Acima do peso");
         }else if (imc >= 30 && imc <= 40) {
            return ("Obeso");
         }else if (imc > 40) {
            return ("Obesidade grave");
         }else{
            return ("imc inválido!!!");
         }
    }
    dizerIMC(imc){
        console.log(`Olá, eu sou o ${this.nome} e meu IMC é ${imc.toFixed(2)}. A classificação é: ${this.classificarIMC(imc)}`);
    }
}

const jose = new Pessoa("José", 75, 1.75);
jose.dizerIMC(jose.calculaIMC());

const lucas = new Pessoa('Lucas', 80, 1.80);
lucas.dizerIMC(lucas.calculaIMC());