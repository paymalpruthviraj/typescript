var Person = /** @class */ (function () {
    function Person(Id, name, age, gender) {
        this.Id = Id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.information = function () {
        console.log("ID : ".concat(this.Id, " Name: ").concat(this.name, " AGE : ").concat(this.age, " Gender : ").concat(this.gender, " "));
    };
    return Person;
}());
var person1 = new Person(1, "Rohit", 24, "Male");
var person2 = new Person(2, "Omkar", 21, "Male");
var person3 = new Person(14, "Rutuja", 23, "Female");
var person4 = new Person(18, "Divya", 21, "Female");
var Arrayperson = [person1, person2, person3, person4];
for (var _i = 0, Arrayperson_1 = Arrayperson; _i < Arrayperson_1.length; _i++) {
    var element = Arrayperson_1[_i];
    element.information();
}
console.log("=======================================================================");



