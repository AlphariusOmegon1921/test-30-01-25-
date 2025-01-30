function izbacivanjeDrugog(niz) {
  const modifikovaniNiz = [...niz].sort((a, b) => a - b);
  return modifikovaniNiz.slice(1).filter((_, index) => index % 2 === 0);
}

console.log(izbacivanjeDrugog([5, 1, 9, 3, 7, 2]));
