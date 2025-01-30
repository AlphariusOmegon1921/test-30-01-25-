function pomjeriNule(niz) {
  let bezNula = [];
  let nule = [];
  niz.forEach((value) => {
    if (value === 0) {
      nule.push(value);
    } else {
      bezNula.push(value);
    }
  });
  return bezNula.concat(nule);
}

console.log(pomjeriNule([0, 1, 0, 3, 12]));
console.log(pomjeriNule([0, 0, 5, 0, 7, 0, 9]));
