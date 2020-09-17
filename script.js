


function calculate(){
  var yearly = document.getElementById('annualSalary').value;
  if (yearly <= 12500){
    var tax = 0;
  }
  else if (yearly <= 50000) {
    var tax = .20;
  }
  else if (yearly <= 150000) {
    var tax = 0.40;
  }
  else {
    var tax = .45;
  }
  var taxed = (yearly * tax);
  var yearAfter = (yearly - taxed);
  var monthAfter = (yearAfter / 12);
  var totalTax = (yearly - yearAfter);
  var taxBracket = tax * 100;
  document.getElementById('yearAfter').innerHTML = yearAfter;
  document.getElementById('monthAfter').innerHTML = monthAfter;
  document.getElementById("totalTax").innerHTML = totalTax;
  document.getElementById("taxBracket").innerHTML = taxBracket + "%";

}
