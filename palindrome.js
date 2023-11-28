function palindrome(str) {
  let upperCase = str.toUpperCase();

  let cleanString = (x) => {
    return x.replaceAll(/[\W\_]/g, "");
  };

  let original = cleanString(upperCase);
  let final = original.split("").reverse().join("");

  if (original == final) {
    console.log(final,original);
  }
  else{
    console.log("Not a Palindrome")
  }
}

palindrome("1 eye for of 1 eye.");
