// QUESTION 1:
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  ageOneYear() {
    this.age++;
  }
  eating() {
    return `Mmm, mmm, mmm, I'm love'n it.`
  }
}

let amy = new Human("Amy Lee", 24);

// console.log(`${amy.name} is ${amy.age} years old.`);
amy.ageOneYear();
// console.log(`${amy.name} is now ${amy.age} years old.`);


//Since I did it using a class the previous day.
// QUESTION 2:

function Vector(x , y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
}

Vector.prototype.getLength = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// => 5
