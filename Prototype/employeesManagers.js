"use strict";

function Person(name, surname){
    this.name = name;
    this.surname = surname;
}
function Employee(name, surname, job, salary){
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
function Manager(name, surname, job, salary, department){
    Employee.call(name, surname, job, salary);
    this.department= department;
}

Developer.prototype.getSpecialization=function(){
    return this.specialization
}
Manager.prototype.getDepartment=function(){
    return this.department
}
Manager.prototype.setDepartment=function(newDepartment){
    return this.department=newDepartment
}
Employee.prototype.getData=function(){
    return this.name + this.surname + this.salary;
}
Employee.prototype.getSalary=function(){
    return this.salary
}
Employee.prototype.increaseSalary=function(){
    return this.salary*0.1;

}

var employee1=new Employee("Nenad", "Dimitrijevic", "programer", 1000);

var developer1=new Developer("Pera", "Peric","developer", 1500, "JS");

var manager1=new Manager("Jovan", "Jovanovic","manager", 2000, "sales");


console.log(manager1.getSalary())
console.log(manager1.increaseSalary());
console.log(manager1.getData())


