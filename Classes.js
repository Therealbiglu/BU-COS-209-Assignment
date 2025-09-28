//  Daluchi Okafor
// 24/0552

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    return `Hi, I'm ${this.name}, and I'm studying ${this.course} at Babcock University.`;
  }
}

// Example usage
const me = new Student("Daluchi Okafor", "Software Engineering");
console.log(me.introduce());
