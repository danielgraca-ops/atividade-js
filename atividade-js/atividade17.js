const listarAnosBissextos = (anoFinal) => {
    for (let ano = 2000; ano <= anoFinal; ano++) {
      if (ano % 4 === 0) {
        console.log(ano);
      }
    }
  };listarAnosBissextos(2016);
  // Saída no console:
  // 2000
  // 2004
  // 2008
  // 2012
  // 2016sw