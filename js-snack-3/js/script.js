var numero;
var paragraph = document.getElementById('colore');
var creaBtn = document.getElementById('random');

creaBtn.addEventListener("click" , function () {
  var numero = prompt("Inserisci un numero");


  if (numero > 0) {
    paragraph.className = "verde";
  } else if (numero < 0){
    paragraph.className = "red";
  } else {
    paragraph.className = "blu";
  }

})
