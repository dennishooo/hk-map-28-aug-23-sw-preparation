let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// variables are let in in here with the corresponding key value pairs in the object
let { a, wtf, ...rest } = obj;

console.log(a);
console.log(rest);

// it would be undefined as there is no 'wtf' key in the object
console.log(wtf);

let arr = [1, 2, 3, 4];

// the variable here would be give the value of the element in the array
let [b, whatamilookingat, ...restArr] = arr;

console.log(b);
console.log(whatamilookingat);
console.log(restArr);

// the function is returning two functions in an array
function getGreetMethod() {
  return [
    () => {
      console.log("hi");
    },
    function sidanla() {
      console.log("bye");
    },
  ];
}
console.log(getGreetMethod());

// the hi and bye here represent the elements in array returned by calling getGreetMethod()
const [hi, bye] = getGreetMethod();

console.log(hi);
console.log(bye);

hi();
hi();
hi();
hi();
hi();
hi();

// the function wont execute without a bracket
console.log;

console.log(console.log);
