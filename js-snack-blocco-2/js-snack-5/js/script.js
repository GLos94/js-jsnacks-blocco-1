var numeri = [];

for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero");

    if (numero %2 == 1) {
      numeri.push(numero);
    }
}
console.log(numeri);
