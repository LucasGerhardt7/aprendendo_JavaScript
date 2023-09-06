/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a sua escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de paagamento:
- a vista débito, recebe 10% de desconto;
- a vista no Dinheiro ou PIX, recebe 15% de desconto;
- em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

let valorProduto = 10;
const formaPagamento = "duas vezes"
let valorProdutoFinal;
let desconto;
let porcentDesconto;

switch (formaPagamento) {
    case "debito":
        porcentDesconto = 10/100;
        desconto = valorProduto * porcentDesconto;
        valorProdutoFinal = valorProduto - desconto;
        console.log("Preço do Produto: R$ "+valorProduto);
        console.log("Preço final com o desconto de "+porcentDesconto*100+"% : R$ "+valorProdutoFinal.toFixed(2));
        break;

    case "a vista":
        porcentDesconto = 15/100;
        desconto = valorProduto * porcentDesconto;
        valorProdutoFinal = valorProduto - desconto;
        console.log("Preço do Produto: R$ "+valorProduto);
        console.log("Preço final com o desconto de "+porcentDesconto*100+"% : R$ "+valorProdutoFinal.toFixed(2));
        break;

    case "duas vezes":
       
        console.log("Preço do Produto: R$ "+valorProduto);
 
        break;

    case "mais de duas vezes":
        porcentDesconto = 10/100;
        desconto = valorProduto * porcentDesconto;
        valorProdutoFinal = valorProduto + desconto;
        console.log("Preço do Produto: R$ "+valorProduto);
        console.log("Preço final com "+porcentDesconto*100+"% de juros: R$ "+valorProdutoFinal.toFixed(2));
        break;
        
    default:
        break;
}