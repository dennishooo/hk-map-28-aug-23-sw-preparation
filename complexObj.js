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
let sameDennis = dennis;

// shallow copy
let shallowCopyOfDennis = { ...dennis };

// deep copy
let deepCopyOfDennis = JSON.parse(JSON.stringify(dennis));

console.log(somethingA);

somethingA.name = "something";

shallowCopyOfDennis.gfList[0].name = "dada";
shallowCopyOfDennis.age = 30;

deepCopyOfDennis.gfList[1].name = "elaine";

console.log(dennis.name);

// while we are editing the shallow copy of dennis,
// the copy that are passed by values become different from the original one.
// however, the nested object from original are being passed as a reference to the shallow copy
// therefore, modifying the shallow copy's one would change the original one
console.log(dennis.age);
console.log(dennis.gfList[0].name);

// while we are editing the deep copy of dennis,
// it wont affect the original dennis
console.log(dennis.gfList[1].name);
console.log(deepCopyOfDennis.gfList[1].name);
