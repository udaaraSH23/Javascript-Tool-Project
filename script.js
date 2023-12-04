import palindrome from "./palindrome.js";
import convertToRoman from "./roman.js";
import {Cipher,deCipher} from "./Cipher.js";
import validator from "./validator.js";





const tabs = document.querySelectorAll(".tabs");

const cardHead = document.getElementById("cardHead");
const detail = document.getElementById("crdDetail");


const card = document.getElementById("palCard");

const closeBtn = document.querySelectorAll('.btnclose')
const panels = document.querySelectorAll('.panel');

closeBtn.forEach((btn,index) => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    tabs[index].classList.remove('fullScreen');
    panels[index].style.display ="none"
    
  });
});

tabs.forEach((each,index) => {
  each.addEventListener("click", () => {
    each.classList.add("fullScreen");
    panels[index].style.display ="block"
  });
});

//Cotent For Changing cards

const cardDetail = [
  {
    heading: "Palindrome Checker",
    content:
      "Palindrome is word or sentence which ryme forward and backward equally.",
  },
  {
    heading: "Ciser Cypher",
    content: "You can Encrypt Your mesaage.No one know what is Exact massage.Send it then",
  },
  {
    heading: "Numarical to Roman Converter",
    content: "Convert Numbers to Roman Numbers",
  },
  {
    heading: "Phone Number validater",
    content: "Validate your phone Number Whether It is in Correct Format",
  }
];
let item = 0;
function iterrate() {
  item++;
  card.classList.add("cardHide");

  setTimeout(() => {
    cardHead.textContent = cardDetail[item].heading;
    detail.textContent = cardDetail[item].content;
    card.classList.remove("cardHide");
  }, 1000);

  if (item > 3) {
    item = 0;
  }
}

setInterval(iterrate, 8000);
//---------------------------------------------------------------

const dec = document.getElementById('decript');
const decCl = document.getElementById('decClk');

const enc = document.getElementById('encript')
const encLI = document.getElementById('encClk')

//Encrypt DIV

encLI.addEventListener('click',() =>{
  
  enc.style.display ='block'
  dec.style.display = 'none';

})

//Decrypt DIV



decCl.addEventListener('click',() =>{
  dec.style.display = 'block';
  enc.style.display ='none'
})


//Palindrome Program

const checkButton = document.getElementById('checkPal')


checkButton.addEventListener('click',() =>{
  const str = document.getElementById('palInput').value;
  const elemPal = document.getElementById('resultPal');

  elemPal.textContent = palindrome(str)
})

//Numaral Converter

const numCheck = document.getElementById('numConvert')

numCheck.addEventListener('click',() =>{
  const num = document.getElementById('numaral').value
  const convrt = document.getElementById('cnvrted')

  convrt.textContent = convertToRoman(num)

})

//Cipher

const buttonEncrypt = document.getElementById('bEnc')

buttonEncrypt.addEventListener('click',() =>{
  const msg = document.getElementById('encMsg').value;
  const keymsg = document.getElementById('keyMsg').value;
  const convert = document.getElementById('encpted');

  convert.textContent = Cipher(msg,keymsg)
})

//Decipher

const buttonDecrypt = document.getElementById('dcrptBtn')
buttonDecrypt.addEventListener('click',() =>{
  const dcrMsg = document.getElementById('dcrptMsg').value;
  const dcpKey = document.getElementById('dcptKy').value
  const decrpted = document.getElementById('decrypted')
  
  decrpted.textContent = deCipher(dcrMsg,dcpKey)
})

//Phone Validator


const valBtn = document.getElementById('valid')


valBtn.addEventListener('click',() =>{
  const phoneNo = document.getElementById('phoneNo').value
  const validStatus = document.getElementById('validStatus')
  validStatus.textContent = validator(phoneNo)
})






