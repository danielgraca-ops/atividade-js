const filtrarAprovados = (notas) => {
    for (const nota of notas) {
      if (nota >= 7) {
        console.log(nota);
      }
    }
  };
  const listaDeNotas = [5.5, 8.0, 4.0, 7.0, 9.5, 6.8];

filtrarAprovados(listaDeNotas);