//method over loading => same method name .different no.of attributes
//method overriding
class Maths{//eg of method overloading
add(num){
    console.log("inside single eparm method");
}
add(num1,num2){
    console.log("inside two arg method");
}
add(num1,num2,num3){
    console.log("inside 3 arg method");
}
}
var mh=new Maths();
mh.add(10,20,30);//always run last given method
mh.add(20,30);
mh.add(30);