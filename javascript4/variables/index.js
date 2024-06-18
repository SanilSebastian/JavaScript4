// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

//1. declaration      let x;
//2. assignment       x = 100;

let age=25;
let price=10.99;
let gpa=2.1;
let firstName = "Bro";
let favoriteFood="pizza";
let email="fake@gmail.com";
let online =false;
let forSale=true;
let isStudent=true;

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The  prize is $${price}`);
console.log(`Your gpa is : ${gpa}`);
console.log(typeof firstName);
console.log(`your name is ${firstName}`);
console.log(`you like ${favoriteFood}`);
console.log(`your email is ${email}`);
console.log(`Are u online : ${online}`);
console.log(`Are u forsale : ${forSale}`);
console.log(`Are u student : ${isStudent}`);

document.getElementById("p1").textContent=`You are ${age} years old`;
document.getElementById("p2").textContent=`The  prize is $${price}`;
document.getElementById("p3").textContent=`Your gpa is : ${gpa}`;
document.getElementById("p4").textContent=`your name is ${firstName}`;
document.getElementById("p5").textContent=`you like ${favoriteFood}`;
document.getElementById("p6").textContent=`your email is ${email}`;
document.getElementById("p7").textContent=`Are u online : ${online}`;
document.getElementById("p8").textContent=`Are u forsale : ${forSale}`;
document.getElementById("p9").textContent=`Are u student : ${isStudent}`;