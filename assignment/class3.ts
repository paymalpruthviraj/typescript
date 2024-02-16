class Person{
    Id:number;
    name:string;
    age:number;
    gender:string;
    constructor(Id:number,name:string,age:number,gender:string){
        this.Id = Id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    information(){
        console.log(`ID : ${this.Id} Name: ${this.name} AGE : ${this.age} Gender : ${this.gender} `);
        
    }
}
const person1 = new Person(1,"Rohit",24,"Male");
const person2 = new Person(2,"Omkar",21,"Male");
const person3 = new Person(14,"Rutuja",23,"Female");
const person4 = new Person(18,"Divya",21,"Female");

const Arrayperson = [person1,person2,person3,person4];
for (const element of Arrayperson) {
    element.information();
}

console.log(`=======================================================================`);
let inputArr:number[] = [1,2,2,4,5,4,7,8,7,3,6];
let uniqueArr: number[] = [];
console.log(`Original array: ${inputArr}`);

for(const element of inputArr){
    if(uniqueArr.indexOf(element)==-1){
        uniqueArr.push(element);
    }
}
console.log(`After Removing Duplicate element : ${uniqueArr}`);



