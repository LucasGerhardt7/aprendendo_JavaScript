/* 
    *********************************
    Utilidade do object destructuring
    *********************************
*/

//Dado um objeto qualquer...
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
};
  
//Para acessar, é preciso criar uma variável e na atribuição indicar o objeto (hero) e a propriedade (name e realName).
let name     = hero.name;//Precisou escrever "name" 2x, uma para dar o nome da variavel e outra para acessar a propriedade.
let realName = hero.realName;
//Repare que precisamos referenciar o objeto duas vezes.
  
console.log(name);     // => 'Batman',
console.log(realName); // => 'Bruce Wayne'

//############################################################################
//                            object destructuring
//############################################################################

/* 
    //Dado um objeto qualquer...
    const hero = {
        name: 'Batman',
        realName: 'Bruce Wayne'
    };
    //declare dentro de chaves o nome da propriedade e da variavel ao mesmo tempo. e só referencia o objeto.
    const { name, realName } = hero;
    
    console.log(name);     // => 'Batman',
    console.log(realName); // => 'Bruce Wayne'
  
*/ 