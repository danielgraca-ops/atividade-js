function exibirClientes(clientes) {
  for (const cliente of clientes) {
    console.log(cliente);
  }
}

// Para testar a função:
const listaClientes = ["Ana", "Bruno", "Carla", "Daniel"];
exibirClientes(listaClientes);
// Saída no console:
// Ana
// Bruno
// Carla
// Daniel