var employees = [
    { id: 100, name: "ram", desig: "developer", join: 1989, resign: 2005 },
    { id: 101, name: "raju", desig: "developer", join: 1990, resign: 2005 },
    { id: 102, name: "ravi", desig: "hr", join: 1991, resign: 1999 },
    { id: 103, name: "amit", desig: "mrkt", join: 1995, resign: 2005 },
]
for (let emp of employees) {
    if (emp["desig"] == "developer") {
        console.log(emp["name"]);
    }

}
for (let emp of employees) {
    if ((emp["join"] > 1990) & (emp["resign"] < 2000)){
        console.log(emp["name"]);
    }
}
for (let emp of employees) {
    if ((emp["resign"]-emp["join"] >=10)){
        console.log(emp["name"]);
    }
}