var creaBtn = document.getElementById('calcola');
creaBtn.addEventListener("click" , function () {

  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var op = document.getElementById('operazioni').value;
  var result = document.getElementById('result');


  if (!op) {
    result.innerHTML = "non hai selezionato nessuna operazione";
  } else if (op == 1) {
    result.innerHTML = num1 + num2;
  } else if (op == 2) {
    result.innerHTML = num1 - num2;
  } else if (op == 3) {
    result.innerHTML = num1 * num2;
  } else if (op == 4) {
    if (num2 == 0) {
      result.innerHTML = "Non posso eseguire l'operazione"
    } else {
      result.innerHTML = num1 / num2;
    }
  }

});
