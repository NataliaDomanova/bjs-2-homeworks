"use strict";

function solveEquation(a, b, c) {
  // код для задачи №1 писать здесь
  let x1;
  let x2; 
  let arr = [x1, x2];
  
  let d = b**2-4*a*c;
  
  
  if(d < 0) {  
    return arr = [];
  }
  
  else if(d === 0) {
    x1 = -b/(2*a);
    return arr = [x1];
  }
    
  else if(d > 0){
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    return arr = [+x1.toFixed(3), +x2.toFixed(3)]
  }  
}

solveEquation(a, b, c)




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
