const entradas = [5,2,4,14,4,1];
let i = 0;

function gets(){
    let valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print};