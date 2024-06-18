// type conversion = change the datatype of a value to another
//                   (string,number,booleans)

let x=``;
let y=``;
let z=``;
let age = window.prompt("how old are u ?");
age=Number(age);
age=age+1;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(age, typeof age);