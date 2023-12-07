function Cipher(str,keyMsg) {
  if(keyMsg>26 || keyMsg<0){
    return "Enter Number 0 to 26 only"
  }
  let sen = str.toUpperCase();
  
  let encrypt = "";

  const key = parseInt(keyMsg);
  console.log(typeof(keyMsg))
  
  const alphab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let x of sen) {
    let indx = alphab.indexOf(x);
    
    if(indx==-1){
        encrypt = encrypt+x
    }
    else{
    encrypt = encrypt + alphab[(indx + key) % 26]
  }
}
  console.log(encrypt)
  return encrypt;
}

function deCipher(dStr,dkey){
  let dSen = dStr.toUpperCase();
  
  let dncrypt = "";

  const key = parseInt(dkey);
 
  
  const alphab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let x of dSen) {
    let indx = alphab.indexOf(x);
    
    
    if(indx==-1){
        dncrypt = dncrypt+x
    }
    else{
    dncrypt = dncrypt + alphab[(indx - key+26) % 26]
  }
  
}
return dncrypt;
}

export  {Cipher,deCipher};