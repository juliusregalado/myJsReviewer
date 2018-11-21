console.log('objects!!');

const obj1 = {
    name: "julius",
    lname: "regalado",
    get fullname() {
        console.log(`${this.name} ${this.lname}`)
    }
}

// obj1.getfirstname();
console.log(obj1)

// let objClone = Object.assign(obj1);
// objClone.getfirstname()

// const ObjConstr = function(name, lname) {
//     this.name = name,
//     this.lname = lname
//     this.getlname = () => {
//         console.log(`${this.lname}`)
//     }
// }

// let objCOnstrInstance1 = new ObjConstr('jul', 'rega')

// objCOnstrInstance1.prototype = Object.create(obj1);

// console.log(objCOnstrInstance1)

// // objCOnstrInstance1.protoype.getfirstname()

// let myFactory = function() {
//     let obj = {}
//     return {
//         obj.a = 1 
//         obj.b = 2
//         getA() {
//             return obj.a;
//         }
//     }
// }

// let objA = new myFactory();

// console.log(objA.get);

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     };
//     getAge() {
//         return this.age
//     };
// };

// let person1 = new Person("Julius",33)

// class Employee extends Person {
//     constructor(name, age, position) {
//         super(name,age);
//         this.position = position
//     };
//     getC() {
//         return this.position
//     };
// };

// let employee1 = new Employee('Julius')
// employee1.b = 45;
// console.log(person1)
// console.log(employee1)

// // console.log(Number.MAX_SAFE_INTEGER)
// // console.log(Number.MAX_SAFE_INTEGER)

// // console.log(9007199254740991 < Number.MAX_SAFE_INTEGER)

// console.log(Number)