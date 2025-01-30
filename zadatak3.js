function saPrefixom(rijeci, prefiks) {
  const nizSaPrefiksom = [];
  rijeci.forEach((rijec) => {
    if (rijec.startsWith(prefiks)) {
      nizSaPrefiksom.push(rijec);
    }
  });

  return nizSaPrefiksom;
}

const rijeci = ["pay", "attention", "practice", "attend"];
const prefiks = "at";

console.log(saPrefixom(rijeci, prefiks));
