// constructor function for students result
function Student(studentInfo, marks) {
  // assign student into property
  this.name = studentInfo.name;
  this.roll = studentInfo.roll;
  this.reg = studentInfo.reg;

  // assign marks into property
  this.ban = marks.ban;
  this.eng = marks.eng;
  this.math = marks.math;
  this.s = marks.s;
  this.ss = marks.ss;
  this.reli = marks.reli;

  // function for calculate gpa of a subject
  this.gpa = function (sub) {
    if (this[sub] >= 0 && this[sub] < 33) return 0;
    if (this[sub] >= 33 && this[sub] < 40) return 1;
    if (this[sub] >= 40 && this[sub] < 50) return 2;
    if (this[sub] >= 50 && this[sub] < 60) return 3;
    if (this[sub] >= 60 && this[sub] < 70) return 3.5;
    if (this[sub] >= 70 && this[sub] < 80) return 4;
    if (this[sub] >= 80 && this[sub] <= 100) return 5;
  };

  // function for calculate grade of a subject
  this.grade = function (sub) {
    if (this[sub] >= 0 && this[sub] < 33) return "F";
    if (this[sub] >= 33 && this[sub] < 40) return "D";
    if (this[sub] >= 40 && this[sub] < 50) return "C";
    if (this[sub] >= 50 && this[sub] < 60) return "B";
    if (this[sub] >= 60 && this[sub] < 70) return "A-";
    if (this[sub] >= 70 && this[sub] < 80) return "A";
    if (this[sub] >= 80 && this[sub] <= 100) return "A+";
  };

  // function for calculate cgpa of all subjects
  this.cgpa = function () {
    if (
      this.ban >= 33 &&
      this.eng >= 33 &&
      this.math >= 33 &&
      this.s >= 33 &&
      this.ss >= 33 &&
      this.reli >= 33
    ) {
      // cgpa calculation
      const totalGpa =
        this.gpa("ban") +
        this.gpa("eng") +
        this.gpa("math") +
        this.gpa("s") +
        this.gpa("ss") +
        this.gpa("reli");

      return (totalGpa / 6).toFixed(2);
    } else {
      return 0;
    }
  };

  // function for final grade
  this.finalGrade = function () {
    if (
      this.ban >= 33 &&
      this.eng >= 33 &&
      this.math >= 33 &&
      this.s >= 33 &&
      this.ss >= 33 &&
      this.reli >= 33
    ) {
      if (this.cgpa() >= 0 && this.cgpa() < 1) return "F";
      if (this.cgpa() >= 1 && this.cgpa() < 2) return "D";
      if (this.cgpa() >= 2 && this.cgpa() < 3) return "C";
      if (this.cgpa() >= 3 && this.cgpa() < 3.5) return "B";
      if (this.cgpa() >= 3.5 && this.cgpa() < 4) return "A-";
      if (this.cgpa() >= 4 && this.cgpa() < 5) return "A";
      if (this.cgpa() == 5) return "A+";
    } else {
      return "F";
    }
  };

  // function for final result (passed or failed)
  this.finalResult = function () {
    if (
      this.ban >= 33 &&
      this.eng >= 33 &&
      this.math >= 33 &&
      this.s >= 33 &&
      this.ss >= 33 &&
      this.reli >= 33
    ) {
      return "Passed";
    } else {
      return "Failed";
    }
  };
} // ends Student constructor

// instance of the constructor
const student_1 = new Student(
  { name: "Ashik", roll: 112201, reg: 998801 },
  { ban: 80, eng: 95, math: 90, s: 84, ss: 80, reli: 45 }
);

// print
console.log(student_1.finalResult());
console.log(student_1.cgpa());
console.log(student_1.finalGrade());
