function palindrome(str) {
  if(str==""){
    return "Please enter a Word"
  }
  let upperCase = str.toUpperCase();

  let cleanString = (x) => {
    return x.replaceAll(/[\W\_]/g, "");
  };

  let original = cleanString(upperCase);
  let final = original.split("").reverse().join("");

  if (original == final) {
    return "Palindrome"
  }
  else{
    return "Not a Palindrome"
  }
}

export default palindrome;
