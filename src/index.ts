function Capitalize(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  let original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("taufan", "prasetyo");
console.log(person.fullName);
