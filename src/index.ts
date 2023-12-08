class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

class Principal extends Person {
  override get fullName() {
    return `Principal ${super.fullName}`;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, "Taufan", "Prasetyo"),
  new Teacher("Abdul", "Hamid"),
  new Principal("Evita", "Karlina"),
]);
