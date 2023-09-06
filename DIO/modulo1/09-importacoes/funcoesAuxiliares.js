const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

print(gets());

//Exportando um objeto que possue as funções gets e print
module.exports = {gets, print};


//poderia ser assim
//module.exports = {gets: gets, print: print};// como tem o mesmo nome, não precisa repitir

function correr(){
    
    return "Ufa! Cansei";
}

const teste = correr();//ao passar a function com os parenteses, se está passando o que a function retorna, no caso, 'Ufa" Cansei'
const teste2 = correr;//Ao passar sem os parenteses, você passa...????????????????????????????????

console.log(typeof module.exports);
