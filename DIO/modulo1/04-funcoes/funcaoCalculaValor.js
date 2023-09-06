/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a sua escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de paagamento:
- a vista débito, recebe 10% de desconto;
- a vista no Dinheiro ou PIX, recebe 15% de desconto;
- em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

//Retorna a porcentagem de desconto
function porcentagemTaxa(modoPagamento) {
    switch (modoPagamento) {
        case "debito":
            return 10;
            break;

        case "a vista":
            return 15;
            break;
        
        case "duas vezes":
            return 0;
            break;

        case "+2x":
            return 10;
            break;
            
        default:
            return "erro";
            break;
    }
}
//Calcula o desconto 
function calculeTaxa(valorProduto, porcentagemDesconto) {//10, 0 return 0

    let taxa = valorProduto * (porcentagemDesconto / 100);
    return taxa;
}

//Calcula o valor final do produto
function calculaPrecoFinal(precoInicial, taxa, formaPagamento){
    if (formaPagamento == "+2x") {//Se for parcelado acima de duas vezes 
       return precoInicial + taxa;//Juros

    } else {
        return precoInicial - taxa;//Desconto
    }
}


//MAIN
(function(){

    function saida(){
        console.log("O produto é R$" + valorProduto + " e o desconto é de " + porcentTaxa + "%");
        console.log("O desconto é de: R$" + taxaValor);
        console.log("O valor final é: R$" + valorProdutoFinal);
    }
    let valorProduto = 100;
    const formaPagamento = "debito";


    let porcentTaxa = porcentagemTaxa(formaPagamento);

    let taxaValor = calculeTaxa(valorProduto, porcentTaxa);

    let valorProdutoFinal = calculaPrecoFinal(valorProduto, taxaValor, formaPagamento);

    saida();
})();



/* switch (formaPagamento) {
    case "debito":
        porcentDesconto = 10/100;
        desconto = valorProduto * porcentDesconto; 
        desconto = calculePorcentagemDesconto(valorProduto, desconto("debito"));
        valorProdutoFinal = valorProduto - desconto;
        console.log("Preço do Produto: R$ " + valorProduto);
        console.log("Preço final com o desconto de " + calculePorcentagemDesconto(valorProduto, desconto("debito")) + "% : R$ " + valorProdutoFinal.toFixed(2));
        break;

    case "a vista":
        porcentDesconto = 15 / 100;
        desconto = valorProduto * porcentDesconto;
        valorProdutoFinal = valorProduto - desconto;
        console.log("Preço do Produto: R$ " + valorProduto);
        console.log("Preço final com o desconto de " + porcentDesconto * 100 + "% : R$ " + valorProdutoFinal.toFixed(2));
        break;

    case "duas vezes":

        console.log("Preço do Produto: R$ " + valorProduto);

        break;

    case "mais de duas vezes":
        porcentDesconto = 10 / 100;
        desconto = valorProduto * porcentDesconto;
        valorProdutoFinal = valorProduto + desconto;
        console.log("Preço do Produto: R$ " + valorProduto);
        console.log("Preço final com " + porcentDesconto * 100 + "% de juros: R$ " + valorProdutoFinal.toFixed(2));
        break;

    default:
        break;
} */