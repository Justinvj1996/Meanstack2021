isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
]
isl.map(tem=>tem.team.toUpperCase()).forEach(tem=>console.log(tem))//team name uppercase
isl.sort((tem1,tem2)=>tem1.played>tem2.played?1:-1).forEach(tem=>console.log(tem.team,tem.played))//most played
var teams=isl.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2)//highest point
console.log(teams);
var ts=isl.reduce((tp1,tp2)=>tp1.pts>tp2.pts?tp2:tp1)//lowest point
console.log(ts);

// for(let ele of isl){
//     if(ele.pts>32){
//         ele.status="Qualified"
//     }
//     else{
//         ele.status="Disqualified"
//     }
// }
// console.log(isl);
var result=isl.filter((tm1)=>tm1.pts>32?tm1["status"]="Qualified":tm1["status"]="Disqualified")//32=Qualified or disqualified
console.log(result);





