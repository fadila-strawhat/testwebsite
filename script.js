
/*
function contact(){
    alert("you have succesfully contacted me")
}

//this is a comment//

name = "Mercy"
age = 19
country = "Nigeria"
favourite_colour = "Pink"
favourite_food = "Jollof Rice"

console.log("Name: " + name)
console.log("Age: " + age)
console.log("Country: " + country)
console.log("Favourite Colour: " + favourite_colour)
console.log("Favourite Food: " + favourite_food)


name = prompt("Enter your name")
document.write(name)

num1 = Number(prompt("Enter your number ?"))
num2 = Number(prompt("Enter 2nd number ?"))
document.write(num1 + num2)


name = prompt("Enter your name")
document.write("<h1>Welcome, " + name + "!</h1>")

_name = prompt("Enter your name")
_age = prompt("Enter your age")
document.write("Welcome, " + _name + " you are " + _age + "years old")
console.log(`Welcome,${_name} you are ${_age} years old`)
confirm("Are you sure you want to continue?")



let name = prompt("Enter your name")
let favcolor = prompt("Enter your favourite colour")
document.write(`My favourite colour is ${favcolor}`)
document.write(`My name is ${name}`)



let  age = prompt("Enter ur age");
if (age>=18){
    alert("You are old enough to watch the movie")
}
else{
    alert("U are not old enough to watch the movie")
}
    

let food = prompt("Enter your favourite food")
  if (food === "Jollof Rice"){
      alert("You are a Rice lover")
  }
  else{
    alert("You are not a Rice lover")
  }

let score = prompt("Enter your score")
if (score >= 70){
    alert("You got an A")
}
else if (score >= 50){
    alert("You got a B")
}

else if (score >= 30){
  alert("You got a C")
}

else{
    alert("You got a D")
}
    


let day = prompt("Enter the day")
switch (day){
    case "Monday":
   alert("It is Monday🤬")
   break;

   case"Friday":
   alert("It is Finally Friday😎")
   break;

   case"Saturday":
   alert("It is the glorious Saturday😉")
   break;

   case"Sunday":
   alert("The weekend is over😔")
   break;
   default:
    alert("It is a weekday😭")
    break;

}
   

for(let i = 0; i <= 100; i++){
    console.log(i);
}
 
let number = Number(prompt("Enter a number"));

for(let i = 1; i <= 12; i++){

    console.log(`${number} × ${i} = ${number * i}`);
}



let i = 1;

while(i <= 10){
    console.log(i);

    i++;
}

function sayHello(){
    alert("Hello World")
}

sayHello()


function add(num1, num2){

    return num1 + num2;

}

let answer = add(10, 5);

console.log(answer);




function greet(name,age,school){
console.log(`Hello ${name} you are ${age} years old and u are currently attending ${school}`);

}
 greet("Dila",20,"pinkspring")


 function add(num1, num2){

    return num1 + num2;

}

let answer = add(10, 5);

console.log(answer);
function test(){

function test(){

    let name = "Dila";

    console.log(name);

}

test();

let student = {
    name: "Mercy",
    age: 21,
    hobby:,

}


 
let students = ["Fadila","Mercy","Farida","Covenant","Farooq"]
let scores  = [80,90,100,95,86]

for (let m = 0; m < students.length;m++){
    console.log(`${students[m]} scores ${scores[m]}`)
}
*/


let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let school = document.getElementById("school");
let password = document.getElementById("password");

let nameerror = document.getElementById("nameerror");
let emailerror = document.getElementById("emailerror");
let addresserror = document.getElementById("addresserror");
let phoneerror = document.getElementById("phoneerror");
let schoolerror = document.getElementById("schoolerror");
let passworderror = document.getElementById("passworderror");

name.addEventListener("input",function(){
    if (name.value === ""){
        nameerror.textContent = "Name  is Required";
        nameerror.style.color = "red";
}
else{
    nameerror.textContent = "";
}
});

email.addEventListener("input",function(){
    if (email.value === ""){
        emailerror.textContent = "Email  is Required";
        emailerror.style.color = "red";
}
else{
    emailerror.textContent = "";
}
});

address.addEventListener("input",function(){
    if (address.value === ""){
        addresserror.textContent = "Address  is Required";
        addresserror.style.color = "red";
}
else{
    addresserror.textContent = "";
}
});

password.addEventListener("input",function(){
    if (password.value === ""){
        passworderror.textContent = "Password  is Required";
        passworderror.style.color = "red";
}
else if (password.value.length < 8){
    passworderror.textContent = "Password must be at least 8 characters long";
    passworderror.style.color = "red";
}
else if(!/[A-Za-z]/.test(password.value)){
    passworderror.textContent = "Password must contain at least one letter";
    passworderror.style.color = "red";
    
}
else if(!/[0-9]/.test(password.value)){
    passworderror.textContent = "Password must contain at least one number";
    passworderror.style.color = "red";
}
else if(!/[!@#$%^&*()_+]/.test(password.value)){
    passworderror.textContent = "Password must contain at least one special character [!@#$%^&*()_+]";
    passworderror.style.color = "red";
}
else{
    passworderror.textContent = "";
}
});



function Hello(){
    alert("Hello World")
}

phone.addEventListener("input",function(){
    if (phone.value === ""){
        phoneerror.textContent = "PhoneNumber is Required";
        phoneerror.style.color = "red";
}
else if (!/^[0-9]{11}$/.test(phone.value)){
    phoneerror.textContent = "PhoneNumber must be 11 digits long";
    phoneerror.style.color = "red";
}
else{
    phoneerror.textContent = "";
}
});

school.addEventListener("input",function(){
    if (school.value === ""){
        schoolerror.textContent = "School is Required";
        schoolerror.style.color = "red";
}
else{
    schoolerror.textContent = "";
}
});