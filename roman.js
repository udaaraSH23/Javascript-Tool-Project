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
  if(num>3999){
    return "Roman Numbers Only go t0 3999 "
  }
  let final = "";
//iterate throgh all keys in roman map
  for (let sym in roman) {
    while (roman[sym] <= num) {
      final = final + sym;
      num = num-roman[sym];
    }
  }
  return final;
}

export default convertToRoman;
