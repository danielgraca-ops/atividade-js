function obterSegredo() {
    const segredo = "123";
    return segredo;
  }
  
  // Retorna "123" normalmente via chamada da função:
  console.log(obterSegredo()); 
  
  // Tenta acessar a variável direta do lado de fora:
  console.log(segredo);