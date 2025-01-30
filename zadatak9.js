function jesuAnagrami(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let modifiedStr = (str) => str.split("").sort().join("");

  return modifiedStr(str1) === modifiedStr(str2);
}

console.log(jesuAnagrami("listen", "silent"));
console.log(jesuAnagrami("hello", "world"));
