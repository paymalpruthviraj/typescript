console.log(`-------------------------Question 1-------------------------`);

const Employee = {
  empId: 12,
  empName: "Kedar",
  empRole: "developer",
  empAge: 27,
  empCompany: "TCS",
};

var { empId, empName, empRole, empCompany, empAge } = Employee;

// console.log(Employee ID: ${empId});
// console.log(Employee Name: ${empName});
// console.log(Employee age: ${empAge});
// console.log(Employee Role: ${empRole});
// console.log(Employee Company: ${empCompany});
console.log(`De-structuring Using For-in Loop`);
console.log("");

for (const key in Employee) {
  if (Object.prototype.hasOwnProperty.call(Employee, key)) {
    const element = Employee[key];
    console.log(`Key: ${key} , Value: ${element}`);
  }
}
console.log("");
console.log(`-------------------------Question 2-------------------------`);
console.log("");

let vaccination: string[] = ["J & J", "Pfizer", "Sputnik"];
console.log(`Original Array: ${vaccination}`);

vaccination.push("Covaxin");
console.log(`After Add New Vaccin: ${vaccination}`);

console.log(`De-structuring Using For-of Loop`);

var [first, second, third, forth] = vaccination;
for (const element of vaccination) {
  console.log(element);
}