const verificarFrete = (valorCompra) => valorCompra > 150 ? "Frete Grátis" : "Cobrar Frete";
console.log(verificarFrete(200)); // Saída: Frete Grátis
console.log(verificarFrete(150)); // Saída: Cobrar Frete
console.log(verificarFrete(80));  // Saída: Cobrar Frete