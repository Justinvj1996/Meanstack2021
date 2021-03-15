class Student{//static
    
   static getcollege(){
       return "Luminar"
   }


    constructor(rol,name,course){
        this.rol=rol;
        this.course=course;
        this.name=name;

    }
    printStudent(){
        console.log(this.rol+","+this.course+","+this.name+","+Student.getcollege());//static variable called by classname.static variable
    }
}
var stud=new Student(100,"ram","Bca")
stud.printStudent()
var stud1=new Student(101,"rani","Mca")
stud1.printStudent()
console.log(Student.getcollege())//satatic called outside the class
