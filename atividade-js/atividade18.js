function transformarStatus(listaBooleanos) {
    const listaFormatada = [];
  
    for (const status of listaBooleanos) {
      const textoStatus = status ? "Concluído" : "Pendente";
      listaFormatada.push(textoStatus);
    }
  
    return listaFormatada;
  }listaFormatada.push(status ? "Concluído" : "Pendente");