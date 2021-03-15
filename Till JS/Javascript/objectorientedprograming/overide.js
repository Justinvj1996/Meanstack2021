//method overriding
class Parent{
    phone(){
        console.log("Have Nokia phone");
    }
}
class Child extends Parent{
    phone(){//same method taken from parent class and override the msg
        super.phone()//super is used to call parent class in child class
        console.log("Have iphone 11Pro");
    }
}
var obj=new Child()
obj.phone()

