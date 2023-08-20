let dennis = {
  name: "Dennis",
  age: 18,
  isHandsome: true,
  noOfGf: 30,
  att: "wtever",
};

console.log(Object.keys(dennis));

console.log(dennis);
console.log(dennis.age);
console.log(dennis["age"]);

for (let att in dennis) {
  console.log(`${att}`);
  console.log(`${att}: ${dennis[att]}`);
}

let students = [
  { birthday: "2019/07/21", tel: "341423", name: "potato", gender: "M" },
  { birthday: "2019/07/21", tel: "341423", name: "william", gender: "M" },
  { birthday: "2019/07/21", tel: "341423", name: "phoebe", gender: "F" },
];

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

// student become a variable that contain the value of the element
// from students[] in every iteration
for (let student of students) {
  console.log(student);
}

// we access the element of the students[] with the index
// every iteration the i would increase, until the i is not smaller than students[]' length
for (let i = 0; i < students.length; i++) {
  console.log(`student ${i}:`, students[i]);
}

// when we call this function, nothing is being returned
function findEatableStudentWithOutReturn(list) {
  let eatableStudents = [];
  for (let student of list) {
    if (student.gender === "M") {
      console.log(student.name);
    }
  }
}

// when we call this function, eatableStudents[] is being returned
function findEatableStudent(list) {
  let eatableStudents = [];
  for (let student of list) {
    if (student.gender === "M") {
      eatableStudents.push({ name: student.name, tel: student.tel });
    }
  }
  return eatableStudents;
}

let someStudents = findEatableStudent(students);
let something = findEatableStudentWithOutReturn(students);

console.log(someStudents);
console.log(something);

let someColleagues = findEatableStudent(colleagues);

console.log(someColleagues);

console.log(students.filter((student) => student.gender === "M"));
console.log(students.forEach((x) => x));

let names = ["dennis", "jason", "jonathan"];
let x = "blah";
let value = "burrrrrrh";

let country;

let filteredName = names.map((value) => ({
  value,
}));
console.log(filteredName);
