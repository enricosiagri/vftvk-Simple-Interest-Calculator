function compute()
{

  var amount = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  for (i=0; i<year; i++) {
    inter = inter+(amount*rate*0.01);
    amonut = amount+inter;
  }
  if (amount == 0) {
      document.getElementById("result2").innerHTML = "Enter an Amount";
      Break;
    }
  if (year == 0) {
      document.getElementById("result2").innerHTML = "Years Required";
      Break;
    }
  if (year != 0 && amount != 0) {
      document.getElementById("result2").innerHTML = inter.toFixed(2);
    }
}

function compute_easy() {

  var amount = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  inter = (amount*rate*0.01*year);
  if (amount == 0) {
      document.getElementById("result1").innerHTML = "Enter an Amount";
      Break;
    }
  if (year == 0) {
      document.getElementById("result1").innerHTML = "Years Required";
      Break;
    }
  if (year != 0 && amount != 0) {
    document.getElementById("result1").innerHTML = inter.toFixed(2);
  }
}
