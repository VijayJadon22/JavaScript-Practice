

/* constructor for function for initializing objects
They start with an uppercase letter by convention (e.g., Person instead of person).
They use this to assign properties to the newly created object.
They are called with the new keyword to create instances.*/
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hi USer: ${this.name}`);
}

const person1 = new Person("swati");
person1.sayHello();