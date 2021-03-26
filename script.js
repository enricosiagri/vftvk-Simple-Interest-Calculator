function compute() {

  var amount = Number(document.getElementById("amount").value);
  var original = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  for (i=0; i<year; i++) {
    inter = (amount*rate*0.01);
    amount = amount+inter;
    money = amount - original;
  }

  if (amount <= 0) {
      alert("Enter an Amount > 0");
      document.getElementById("result2").innerHTML = "Enter Amount > 0";
      document.getElementById("amount").focus();
      Break;
    }
  if (year <= 0) {
      alert("Years Required");
      document.getElementById("result2").innerHTML = "Years Required > 0";
      document.getElementById("Years").focus();
      Break;
    }
  if (year != 0 && amount != 0) {
      document.getElementById("result2").innerHTML = money.toFixed(2);
      document.getElementById("cm").innerHTML = money.toFixed(2);
      Break;
    }

}

function compute_easy() {

  var amount = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  inter = (amount*rate*0.01*year);
  if (amount <= 0) {
      alert("Enter Amount > 0");
      document.getElementById("result1").innerHTML = "Enter Amount > 0";
      document.getElementById("amount").focus();
      Break;
    }
  if (year <= 0) {
      alert("Years Required");
      document.getElementById("result1").innerHTML = "Years Required > 0";
      document.getElementById("Years").focus();
      Break;
    }
  if (year != 0 && amount != 0) {
    document.getElementById("result1").innerHTML = inter.toFixed(2);
    document.getElementById("si").innerHTML = inter.toFixed(2);
    Break;
  }
}

function fill_summary() {
  var original = Number(document.getElementById("amount").value);
  var year = Number(document.getElementById("Years").value);
  var rate = Number(document.getElementById("Interest").value);

  document.getElementById("am").innerHTML = original.toFixed(2);
  document.getElementById("rt").innerHTML = rate.toFixed(2);
  document.getElementById("yr").innerHTML = (year+2021).toFixed(0);
}
