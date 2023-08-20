let colleagues = [
  {
    address: "hk",
    birthday: "2019/07/21",
    tel: "341423",
    name: "potato",
    gender: "M",
  },
  {
    address: "hk",
    birthday: "2019/07/21",
    tel: "341423",
    name: "william",
    gender: "M",
  },
  {
    address: "hk",
    birthday: "2019/07/21",
    tel: "341423",
    name: "phoebe",
    gender: "F",
  },
];

// function can be defined in different ways
function add() {}
// const filterFunc = (x) => {
//   console.log(x);
//   return true;
// };

// const filterFunc = (x) => {
//   return true;
// };
const filterFunc = (x) => x.gender === "M";

let arr = colleagues.filter(filterFunc);

let arr2 = arr.map((x) => ({ ...x, height: 180 }));
let arr3 = arr2.forEach((x) => {
  console.log(x.name);
});

console.log({ arr, arr2, arr3 });
