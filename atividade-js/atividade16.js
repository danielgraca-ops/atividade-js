

  const verificarVIP = (nomes, nomeBuscado) => {
    for (const nome of nomes) {
      if (nome === nomeBuscado) {
        return true;
      }
    }
    return false;
  };