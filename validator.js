function telephoneCheck(str){
  //Regex for Country Code
  const cntryReg = new RegExp(/1/)
//Regex for area code
  const regstart = new RegExp(/(\s|\-)?\d{3}|(\s|\-)?\(\d{3}\)/);
//Regex for remaining
  const regend = new RegExp(/(\s|\-)?\d{3}(\-|\s)?\d{4}/);
//Combining All in to one Regex
  const combine = new RegExp(`^${cntryReg.source}?(${regstart.source})${regend.source}$`);

  return combine.test(str)
}

telephoneCheck("444 444 4444");