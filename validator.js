function telephoneCheck(str){
  //Regex for Country Code
  const cntryReg = new RegExp(/1/)
//Regex for area code
  const regstart = new RegExp(/(\s|\-)?\d{3}|(\s|\-)?\(\d{3}\)/);
//Regex for remaining
  const regend = new RegExp(/(\s|\-)?\d{3}(\-|\s)?\d{4}/);
//Combining All in to one Regex
  const combine = new RegExp(`^${cntryReg.source}?(${regstart.source})${regend.source}$`);

  const validity =  combine.test(str)
  if(validity){
    return "Valid Phone Number"
  }
  else{
    return "Not valid Phone NUmber"
  }
}

export default telephoneCheck;