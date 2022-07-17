'use strict'
function parseCount(x) {
  let parsed = Number.parseInt(x);
  if (isNaN(parsed))
    throw new Error("Невалидное значение");
  else
    return parsed;
}

function validateCount(x) {
  try {
    const newCount = parseCount(x);
    return newCount;
  } catch (error) {
    return error;
  }
  return newCount;
}


console.log(validateCount('nhg123'));
//////////////

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let s = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
   return (s);
  }
}

function getTriangle(a, b, c) {
  let triangle = new Triangle(a, b, c);
   return triangle;
 }

console.log(getTriangle(12, 20, 30));
const one = new Triangle(4, 5, 6);
const two = new Triangle(45, 25, 55);
const three = new Triangle(100, 25, 45);
console.log(one);
console.log(two);

