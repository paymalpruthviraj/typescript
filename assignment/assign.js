console.log("-------------------------Question 1-------------------------");
var Employee = {
    empId: 12,
    empName: "Kedar",
    empRole: "developer",
    empAge: 27,
    empCompany: "TCS",
};
var empId = Employee.empId, empName = Employee.empName, empRole = Employee.empRole, empCompany = Employee.empCompany, empAge = Employee.empAge;
// console.log(Employee ID: ${empId});
// console.log(Employee Name: ${empName});
// console.log(Employee age: ${empAge});
// console.log(Employee Role: ${empRole});
// console.log(Employee Company: ${empCompany});
console.log("De-structuring Using For-in Loop");
console.log("");
for (var key in Employee) {
    if (Object.prototype.hasOwnProperty.call(Employee, key)) {
        var element = Employee[key];
        console.log("Key: ".concat(key, " , Value: ").concat(element));
    }
}
console.log("");
console.log("-------------------------Question 2-------------------------");
console.log("");
var vaccination = ["J & J", "Pfizer", "Sputnik"];
console.log("Original Array: ".concat(vaccination));
vaccination.push("Covaxin");
console.log("After Add New Vaccin: ".concat(vaccination));
console.log("De-structuring Using For-of Loop");
var first = vaccination[0], second = vaccination[1], third = vaccination[2], forth = vaccination[3];
for (var _i = 0, vaccination_1 = vaccination; _i < vaccination_1.length; _i++) {
    var element = vaccination_1[_i];
    console.log(element);
}
