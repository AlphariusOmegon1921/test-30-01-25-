function jePalindrom(brojevi) {
  let isPalindrom = true;
  brojevi.forEach((value, index) => {
    if (value !== brojevi[brojevi.length - 1 - index]) {
      isPalindrom = false;
    }
  });
  return isPalindrom;
}

console.log(jePalindrom([1, 2, 3, 2, 1]));
console.log(jePalindrom([1, 2, 3, 4, 5]));
