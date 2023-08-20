function checkMarkSix(ans, guesses) {
  for (let guess of guesses) {
    if (!ans.includes(guess)) {
      return false;
    }
  }
  return true;
}

function quickPicks(ans, timesOfGuesses) {
  let result = [];
  for (let i = 0; i < timesOfGuesses; i++) {
    let bid = genPick();
    result.push({ bid, win: checkMarkSix(ans, bid) });
  }
  return result;
}

function genPick() {
  let guesses = new Set();
  while (guesses.size < 2) guesses.add(Math.floor(Math.random() * 20));
  return Array.from(guesses);
}

// for (let i = 0; i < 100; i++) {
//   console.log(genPick());
// }

// console.log(guess);
// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
// console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

// console.log(quickPicks([1, 3, 5, 7, 9, 11], 1)); // returns: [{"bid": [1, 3], "win": true}]
// console.log(quickPicks([1, 3, 5, 7, 9, 11], 3)); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]

let results = quickPicks([1, 3, 5, 7, 9, 11], 3);
let start = Date.now();
for (let i = 0; i < results.length; i++) {
  setTimeout(() => {
    let end = Date.now();
    console.log("Used Time: ", end - start, " seconds");
    console.log("Your quick pick: ", results[i].bid);
    console.log(results[i].win ? "WIN" : "LOSE");
  }, 1000 * i);
}

console.log("huhhhh");
