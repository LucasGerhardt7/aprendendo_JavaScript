
/* 
    Objeto são basicamente variiáveis com muitos valores dentro.

    EX const carro = {marca:"ford", modelo:"ka", ano: 2015};

    Os valores dentro de um objeto são chamados PROPRIEDADES.

    Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade.
*/

var carro1 = "ford";


// Boa pratica criar objetos com const
// É um objeto literal, pois se cria o objeto com os valores fixos. 
const carro2 = {
    marca:"ford", 
    modelo:"ka", 
    ano: 2015, 
    placa:"ABC-1234",
    buzina: function(){alert('biiiiiiiiii')},
    completo: function(){
        return "A marca é "+this.marca+" e o modelo é: "+this.modelo // o this é usado para pegar informação do proprio objeto 
    }
};

console.log(carro2);// exibe todo o objeto e suas propriedades

carro2.buzina(); // chama o método buzina

console.log(carro2.completo()) // mostra o resultado do método completo