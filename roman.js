function convertToRoman(num) {
  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let final = "";
//iterate throgh all keys in roman map
  for (sym in roman) {
    while (roman[sym] <= num) {
      final = final + sym;
      num = num-roman[sym];
    }
  }

  return final;
}
convertToRoman(36);
