function obrniString(tekst) {
  return tekst
    .split("")
    .map((_, index, arr) => arr[arr.length - 1 - index])
    .join("");
}

console.log(obrniString("programiranje"));
console.log(obrniString("javascript"));
