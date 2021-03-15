var employee={
    id:10,
    name: "Justin vj",
    desig: "developer",
    salary:25000,
    
}
employee["salary"]+=5000
if("gender" in employee){
    console.log("Exist");
}
else{
    employee["gender"]="Male";

}
console.log(employee);