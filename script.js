function compute()
{

  var amount = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  var inter = 0;

  for (i=0; i<year; i++) {
    amount = amount+inter;
    inter = (amount*rate*0.01);
  }

  document.getElementById("result2").innerHTML = inter.toFixed(2);
}

function compute_easy() {

  var amount = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  inter = (amount*rate*0.01*year);

  document.getElementById("result1").innerHTML = inter.toFixed(2);
}
