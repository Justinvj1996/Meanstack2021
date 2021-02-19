class Parent{//multiple inheritance not possible in js, multi level only
    m1(){
        console.log("Inside parent m1 method");
    }
}
class Child extends Parent{
    m2(){
        console.log("Inside child m2 method");
    }
}
class subChild extends Child{
    m3(){
        console.log("Inside subchild m3 method");
    }
}
var sb=new subChild()
sb.m3()
sb.m2()
sb.m1()
var ch=new Child()
ch.m2()
ch.m1()
var pr=new Parent()
pr.m1()