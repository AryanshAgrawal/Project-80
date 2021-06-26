function submit(){
var Guestname = document.getElementById("name1").value;
names_of_people.push(Guestname);
}
function show(){
names_of_people.sort();
}
function search(){
var s= document.getElementById("s1").value;
var found="0";
var j;
for (j=0; j<names_of_people.lenght; j++)
{
if (s==names_of_people[j]){
    found=found+1;
}
}
document.getElementById("p2").innerHTML="name found "+found+"time/s";
console.log("found name"+found+"time/s");
}