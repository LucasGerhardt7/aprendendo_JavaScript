function verificaIdade(anoNascimento, anoAtual){
    const idade = anoAtual - anoNascimento;
    if (idade < 18) {
        return "Menor de idade";
    }else{
        return "Maior de idade";
    }

}


(function(){
    console.log(verificaIdade(1998,2023))
})()