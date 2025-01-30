function jeAritmetickiNiz(niz) {
  let razlikaBrojeva = niz[1] - niz[0];
  let aritmetickiNiz = true;
  niz.forEach((broj, index) => {
    if (index > 0 && broj - niz[index - 1] !== razlikaBrojeva) {
      aritmetickiNiz = false;
    }
  });
  return aritmetickiNiz;
}

console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));
console.log(jeAritmetickiNiz([3, 6, 9, 15]));
