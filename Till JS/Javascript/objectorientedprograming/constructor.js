class Person{
    constructor(nam,ag,genr){
        this.name=nam;
        this.age=ag;
        this.gender=genr;
    }
    printPerson(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);

    }
}
var obj=new Person("akhil",24,"Male")
console.log(obj);
var obj1=new Person("rani",24,"Female")
console.log(obj1);
