const  verificarAcesso = function(idade ){
    return idade >= 18 ? "permitido":
"Bloqueado"};

// Para testar a função:
console.log(verificarAcesso(20)); // Saída: Permitido
console.log(verificarAcesso(15)); // Saída: Bloqueado
