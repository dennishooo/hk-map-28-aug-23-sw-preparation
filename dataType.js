// Primitive Data Types
let num = 12;
let fakeNum = "12";

console.log(+num);
console.log(typeof +num);
console.log(isNaN(+num));
// console.log(num.replace("e", "c"));
console.log(parseInt(num).toFixed());

console.log(typeof (num + fakeNum));
console.log("-dsaf123" > 0);

if (num === fakeNum) {
  console.log("num === str");
}
