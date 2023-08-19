let dennis = {
  name: "dennis",
  age: 18,
  gfList: [
    { name: "amy", height: 180 },
    { name: "betty", height: 180 },
    { name: "amy", height: 180 },
  ],
  greet: (person) => {
    console.log("ni hao", person);
  },
};

dennis.greet("david");
let amy = dennis.gfList[0];

console.log(amy);

// pointing to memory address
let somethingA = dennis;
// shallow copy
let somethingB = { ...dennis };
// deep copy
let somethingC = JSON.parse(JSON.stringify(dennis));

console.log(somethingA);

somethingA.name = "something";

somethingB.gfList[0].name = "dada";
somethingB.age = 30;

somethingC.gfList[1].name = "elaine";

console.log(dennis.name);

console.log(dennis.age);
console.log(dennis.gfList[0].name);
console.log(dennis.gfList[1].name);
