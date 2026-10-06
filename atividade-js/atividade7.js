const gastarEnergia = function(energiaInicial) {
  let energia = energiaInicial;

  while (energia > 0) {
    energia -= 10;
    console.log(`Energia atual: ${energia}`);
  }
};

// Para testar a função:
gastarEnergia(50);
// Saída no console:
// Energia atual: 40
// Energia atual: 30
// Energia atual: 20
// Energia atual: 10
// Energia atual: 0