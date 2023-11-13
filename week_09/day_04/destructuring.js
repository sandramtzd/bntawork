const numbers = [10, 20, 30, 40];

// without destructuring

// const ten = numbers[0];
// const twenty = numbers[1];

// console.log(ten);
// console.log(twenty);

//with destructuring

const [ten, twenty, ...rest] = numbers;
console.log(ten);
console.log(twenty);

let a, b;
({a,b} = { a: 10, b: 20})

console.log(a);

const person = {
    name: "Sally",
    age:25
}

// const name = person.name; // person['name]
// const age = person.age;

const {name, age} = person;
console.log(name);
console.log(age);