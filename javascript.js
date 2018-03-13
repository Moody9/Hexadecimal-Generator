let section = document.querySelector('section');
let div = document.createElement('div');
let buttonStop = document.querySelector("#buttonStop");
let buttonGenerate = document.querySelector("#buttonGenerate");
let input = document.querySelector('input');







const hexaColor = function(){
 let randNum;
 let randNumberGenerator = '';
 let numbersLetters = '0123456789abcdef'.split('');
 for (let i = 0; i < 6; i++){
 randNum = Math.floor(Math.random() * numbersLetters.length);
 randNumberGenerator += numbersLetters[randNum];
 }
return "#" + randNumberGenerator ;
};

const createDivs = function(){
  let userInput;
  if(input.value ===''){
    userInput = 5;
  }
  else{
    userInput = parseInt(input.value);
  }

for (var i = 0; i < userInput; i++) {
  let div = document.createElement('div');
      let randomColor1;
      randomColor1 = hexaColor();
      div.textContent = randomColor1;
      div.style.backgroundColor = randomColor1;
      div.style.textAlign = 'center';
      div.style.height = '110px';
      div.style.width = '700px';
      div.style.fontFamily = 'Montserrat';
      div.style.marginLeft = '300px';
      div.style.paddingTop = '40px';
section.appendChild(div);
}
};

let interval = setInterval(()=>{
  section.innerHTML = '';
  createDivs();
},3000);


const stopAnimating = ()=>{

};

buttonStop.addEventListener('click',()=>{
  clearInterval(interval);
})

buttonGenerate.addEventListener('click',function(){
  clearInterval(interval);
  section.innerHTML = '';
  createDivs();
});


createDivs();
