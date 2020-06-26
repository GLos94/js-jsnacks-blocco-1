var numeriDispari = [];

for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero");

    if (numero %2 == 1) {
      numeriDispari.push(numero);
    }
}
console.log(numeriDispari);
