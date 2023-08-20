let years = [1997, 1996, 1900, 2000];

function checkLeapYear(year) {
  if (year % 400 === 0) {
    return `${year} is leap year`;
  } else if (year % 100 === 0) {
    return `${year} is NOT leap year`;
  } else if (year % 4 === 0) {
    return `${year} is leap year`;
  } else {
    return `${year} is NOT leap year`;
  }
}

for (let year of years) {
  console.log(checkLeapYear(year));
}
