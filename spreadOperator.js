let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, wtf, ...rest } = obj;

console.log(a);
console.log(rest);
console.log(wtf);

let arr = [1, 2, 3, 4];

let [b, whatamilookingat, ...restArr] = arr;

console.log(b);
console.log(whatamilookingat);
console.log(restArr);

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

const [hi, bye] = getGreetMethod();

console.log(hi);
console.log(bye);

hi();
hi();
hi();
hi();
hi();
hi();
console.log;

console.log(console.log);
