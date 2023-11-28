function rot13(str) {
  let sen = str.toUpperCase();
  let encrypt = "";

  const key = 13;

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

  return encrypt;
}

console.log(rot13("SERR PBQR PNZC"))