class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
    
    static compareAge(person1, person2) {
        if (person1.age > person2.age){
            return `${person1.name} is older`
        }
        else if (person1.age < person2.age){
            return `${person2.name} is older`
        }
        else{
            return `Both are of the same age`
        }
    }
}


class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        super(name, age, jobTitle);
        let _salary = salary;

        this.getSalary = function() {
            return `${_salary}`
        }

        this.setSalary = function(newSalary) {
            _salary = newSalary;
        }
    }
}

// Test the encapsulation
const employee2 = new Employee("Eve", 28, "Designer", 50000);
console.log(employee2.getSalary());
employee2.setSalary(55000);
console.log(employee2.getSalary());

