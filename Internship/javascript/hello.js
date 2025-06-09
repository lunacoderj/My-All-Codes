function fact() {
  var number = prompt("Enter number");
  factorial = 1;
  if (number > 0) {
    for (var i = 1; i <= number; i++) {
      factorial *= i;
    }
  }
  alert(number + " factorial is " + factorial);
}


function prime() {
  var number = prompt("Enter number");
  count = 0;
  if (number > 1) {
    for (var i = 2; i <= number; i++) {
      if (number % i == 0) {
        count++;
      }
    }
    if (count == 1) {
      alert(number + " is a prime number");
    } 
    else {
      alert(number + " is not a prime number");
    }
  } 
  else {
    alert("Please enter a number greater than 1");
  }
}