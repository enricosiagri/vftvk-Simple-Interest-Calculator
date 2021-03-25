function compute()
{

  var amount = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("rate").value);


  for (i=0; i<year; i++) {
    inter = (amount*rate*0.01);
    amount = amount+inter;
  }

  document.getElementById("result").innerHTML = amount;
}
