function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark); // добавить первую оценку 
  } else {
    this.marks.push(mark)// добавить вторую и последующие оценки в массив
  }
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function() {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) { 
  this.excluded = reason;
  if(reason === 'low grades') {
    delete this.subject;
    delete this.marks;
    delete this.marks1;
  }
}

let student1 = new Student('Alexei', 'male', 30);
student1.setSubject('Algebra');
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
student1.addMarks(4, 5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student('Anton', 'male', 37);
student2.setSubject('Geometry');
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude();
console.log(student2);