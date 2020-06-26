var invitati = ["Jay", "Daisy", "Nick", "Tom"];
console.log(invitati);

var nomeUtente = prompt("Qual è il tuo nome?");
console.log(nomeUtente);

var nomiAccettati = false;

for (var i = 0; i < invitati.length; i++) {
  if (nomeUtente == invitati[i]) {
    nomiAccettati = true;
  }

}

if (nomiAccettati == true) {
  console.log("Sei sulla lista");
} else {
  console.log("Non sei sulla lista");
}
