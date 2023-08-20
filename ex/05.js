const RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

let dna = "GCTA";
// let rna = [];
// for (let key of dna.split("")) {
//   console.log(key);
//   console.log(RNA[key]);
//   rna.push(RNA[key]);
// }
// console.log("ans:", rna.join(""));

function rnaTranscription(dna) {
  return dna
    .split("")
    .map((key) => RNA[key])
    .join("");
  //   return RNA[dna];
}
console.log(rnaTranscription("GCTA"));
