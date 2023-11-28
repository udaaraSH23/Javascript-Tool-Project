function checkCashRegister(price, cash, cid) {
  //Creating Returning Object
  let stsObj = {
    status: "",
    change: [],
  };
  //Total Cash in Drawer
  let totalSum = 0;
  let remain = 0;

  for (let x of cid) {
    totalSum += x[1];
  }

  //Check Drawer can return the Cash
  totalSum = parseFloat(totalSum.toFixed(2));
  remain = parseFloat((cash - price).toFixed(2));


  if (remain > totalSum) {
    stsObj.status = "INSUFFICIENT_FUNDS";
    return stsObj;
  }

  if((totalSum-remain)==0){
    stsObj.status = 'CLOSED'
    stsObj.change =cid;
    return stsObj;
  }
  else{
    stsObj.status='OPEN'
  }

  //check for currenct unit value and add Items to array
  let reverseCID = cid.reverse();//Reverse the Array

  for (const x of reverseCID) {
    const currency = x[0];
    let drawervalue = parseFloat(x[1].toFixed(2));//Drawer value

    const unitValue = parseFloat(getCurrencyValue(currency).toFixed(2));//Each Unit numerical Value

    if (remain >= unitValue && drawervalue >= unitValue) {
      let currUnits = Math.floor(remain / unitValue);

      let amount = 0;
      while (currUnits > 0 && drawervalue > 0) {
        drawervalue = drawervalue - unitValue;
        amount = parseFloat((amount + unitValue).toFixed(2));
        remain = parseFloat((remain - unitValue)).toFixed(2);
        currUnits--;
      }
      stsObj.change.push([currency, amount]);
    }
  }

  if(remain !=0){
    stsObj.status = 'INSUFFICIENT_FUNDS'
    stsObj.change = [];
  }
  
  return stsObj;
}

//Get Currency values
function getCurrencyValue(currencyUnit) {
  switch (currencyUnit) {
    case "PENNY":
      return 0.01;
    case "NICKEL":
      return 0.05;
    case "DIME":
      return 0.1;
    case "QUARTER":
      return 0.25;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    case "ONE HUNDRED":
      return 100;
    default:
      return 0;
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

