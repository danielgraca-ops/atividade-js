function verificarEstoque(quantidade) {
  if (quantidade < 5) {
    return "Estoque Crítico";
  } else {
    return "Estoque Normal";
  }
}

// Para testar a função:
console.log(verificarEstoque(3)); // Saída: Estoque Crítico
console.log(verificarEstoque(10)); // Saída: Estoque Normal