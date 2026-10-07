const calcularTotal = function(precos) {
    let total = 0;
  
    for (const preco of precos) {
      total += preco;
    }
  
    return total;
  };const carrinho = [12.50, 5.00, 30.00, 8.25];

  console.log(calcularTotal(carrinho)); // Saída: 55.75