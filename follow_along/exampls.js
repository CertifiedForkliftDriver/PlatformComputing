const x =10;
console.log(x);
let y = 11;
console.log(y);
var z = 12;
console.log(z)
let c = 5;

function fool(){
    let  w = 13;
    console.log(w);
}
fool();
console.log(`y is ${y}`);

let a = 1;

console.log(`a == "1" is ${a == 1}`);
console.log(`a == "1" is ${a == "1"}`);
console.log(`a == "1" is ${a === "1"}`);
console.log(`a == "1" is ${a != "1"}`);
console.log(`a == 1 is ${a !== "1"}`);

console.warn("Warning");
console.error("This is an error");
console.log(`My expression ${a}`);


if(x < y) {
    console.log("x < y");

} else {
    console.log("x >= y")
}

while (y < c) {
    console.log(`y: ${y}, z: ${z}`);
    y++
}

console.log(`Exited loop at y: ${y}, z: ${z}`);

for( let i = 0; i < x; i++){
    console.log(i);
}

console.log(`data type of y is ${typeof(y)}`);
let greet = "hello";
console.log(`data type of y is ${typeof(greet)}`);
let yesOrNo = true;
console.log(`data type of y is ${typeof(yesOrNo)}`);
let dictEx = {};
console.log(`data type of y is ${typeof(dictEx)}`);


let myFunction = (a, b) => a * b;

const greeting = name => `Hello, ${name}!`;

const array = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array, ...array2];

myButton.addEventListener('click', function() {
    console.log(combinedArray);
});