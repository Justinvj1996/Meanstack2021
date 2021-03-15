//class
//object
//reference
class Person{
    setPerson(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPerson(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);

    }
}
var obj=new Person()
obj.setPerson("ram",25,"Male")
obj.printPerson()
var obj1=new Person()
obj1.setPerson("rani",24,"Female")
obj1.printPerson()