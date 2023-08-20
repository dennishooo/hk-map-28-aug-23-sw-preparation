// for (let i = 0; i < 10; i++) {
//   console.log({ guess, ans });
//   console.log(guess === ans);
// }

const ANS = Math.floor(Math.random() * 10);
console.log(ANS);
let guess = parseInt(prompt("guess a number from 0 to 10"));
let guessTimes = 0;
while (true) {
  if (guess === ANS) {
    alert("You are right!");
    console.log({ guess, ANS });
    break;
  }
  if (guessTimes === 2) {
    alert("You are such a loser!");
    break;
  } else {
    guessTimes++;
    guess = parseInt(
      prompt(
        `Your answer should be ${showHints(ANS, guess)}, attempts left: ${
          3 - guessTimes
        }`
      )
    );
    console.log({ guess, ANS, guessTimes });
  }
}

function showHints(ans, guess) {
  if (guess > ans) {
    return "smaller";
  } else {
    return "larger";
  }
  //   return guess > ans ? "smaller" : "larger";
}
