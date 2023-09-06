/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.

Crie um método que dado a quantidade de KM e o preço do combustível, nos de o valor gasto em reais para realizaar esse percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calculaGastoCombustivel(km, precoCombustivel){
       let litrosGastos = km * this.gastoMedioPorKm;
       return (litrosGastos * precoCombustivel).toFixed(2);
    }
}

const corsa = new Carro("Chevrolet", "Prata", 1/12);

console.log(`O corsa consome ${corsa.gastoMedioPorKm.toFixed(2)}L por KM.`);
console.log(`Nesta viajem você gastará: R$${corsa.calculaGastoCombustivel(70,5)}`);


//Distancia: 10km
//0.083L por km
