var names_of_people=[];

function submit(){
var Guestname = document.getElementById("name_of_guest_1").value;
names_of_people.push(Guestname);
}
function show(){
names_of_people.sort();
console.log(names_of_people);
document.getElementById("display").innerHTML=names_of_people;
}
function Search(){
var s= document.getElementById("search_name").value;
var found=0;
var j;
for (j=0; j<names_of_people.length; j++)
{
if (s==names_of_people[j]){
    found=found+1;
}
}
document.getElementById("p2").innerHTML="name found "+found+"time/s";
console.log("found name"+found+"time/s");
}