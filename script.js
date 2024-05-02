//                   key -- value

const objectExample = {
  name: "Eitan",
  grades: [80, 70, 60],
  age: 27,
  car: "Renault",
};
objectExample.car = "Toyota"; //objectExample --> "Toyota"
console.log(objectExample.name); // 'Eitan'
console.log(objectExample["name"]); // 'Eitan'

//for in loop --> for objects
for (let key in objectExample) {
  //   console.log(This is the key ${key});
  //   console.log(This is the value: ${objectExample[key]});
}
// Ctrl + A + K + F
let arrayOfObjects = [
  { name: "Eitan", age: 27 },
  { name: "Yanon", age: 21 },
  { name: "Tom", age: 34 },
];

const over25 = arrayOfObjects.filter((element) => element.age > 25);
console.log(over25);

for (let i = 0; i < arrayOfObjects.length; i++) {
  console.log(arrayOfObjects[i].name);
}

arrayOfObjects.forEach((person) => console.log(person.name));



let customerDetails = [
  {
    name: "eitan",
    age: 27,
    address: {
      city: "Beer Sheva",
      street: "Classified information",
    },
  },

  {
    name: "Aviv",
    age: 24,
    address: {
      city: "TLV",
      street: "Classified information",
    },
  },
  {
    name: "Anonymus",
    age: 31,
    address: {
      city: "TLV",
      street: "Classified information",
    },
  },
];

function printTelAvivians(arr){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i].address.city === 'TLV'){
            console.log(arr[i].name)
        }
    }

    //? forEach
    arr.forEach(person => {
        if(person.address.city === 'TLV'){
            console.log(person.name)
        }
    })

    arr.forEach(person => person.address.city === 'TLV' ? console.log(person.name) : null)
}

// printTelAvivians(customerDetails)


// objectExample = {
//     name: "Eitan",
//     grades: [80, 70, 60],
//     age: 27,
//     car: "Renault",
//   };

//* Object Destructring --> לשבור את האובייקט
const {name,age} = objectExample
// console.log(name)
// console.log(age)

const keysArray = Object.keys(objectExample) // ["name","grades","age","car"]
const valuesArray = Object.values(objectExample) // ["Eitan","80,70,60","27","Renault"]


const frozenObject = Object.freeze(objectExample)
frozenObject.newProperty = 'Something'
console.log(frozenObject)

class Student{
    constructor(id,name,grades){
        this.id = id;
        this.name = name;
        this.grades = grades
    }

    printDetails(){
        console.log(`id: ${this.id}, full name: ${this.name} , grades: ${this.grades}`)
    }
    avarge(){
        const sum = this.grades.reduce()


    }

     //? תרגיל כיתה
      //? צרו מתודה שמחשבת את הממוצע של תלמיד במחלקה


}

let student1 = new Student('123','Eitan Leiberman',[80,90,80])
let student2 = new Student('5555',"Adi",[80,80,80])
student2.printDetails()


class Person{
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

  
    //? תרגיל כיתה
    //? במחלקה תיהיה מתודה שמחשבת מה הגיל

    checkAge(){
        let age = 2024 - this.dateOfBirth 
        console.log(age);
        
    }

}

const person1 = new Person('eitan','1997')
person1.checkAge()