function soma(valor1,valor2){
    return valor1+valor2;
}
function realParaDollar(real,cotacaoDolar){
    return real / cotacaoDolar;
}

let valorReal = 10;
let cotacaoDolar = 5;

alert("O valor em real é: R$" + valorReal + ". O valor em dollar é U$"+realParaDollar(valorReal,cotacaoDolar))

document.getElementById("texto").innerHTML = soma(10,70);