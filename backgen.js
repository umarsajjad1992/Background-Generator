var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.getElementById('body1');
var button = document.getElementById('random');
function setColor(){
    body.style.background = "linear-gradient(to right, " +color1.value+", "+color2.value+")";
    h3.textContent = body.style.background + ";";
}

function randomColor() {
  color1.value= '#'+ ('000000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
  color2.value= '#'+ ('000000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
  body.style.background = "linear-gradient(to right, " +color1.value+", "+color2.value+")";
  h3.textContent = body.style.background + ";";
}
function setLoadPage(){
    body.style.background = "linear-gradient(to right, " +color1.value+", "+color2.value+")";
    h3.textContent = body.style.background + ";";
}
setLoadPage();
color1.addEventListener("input",setColor);
color2.addEventListener("input",setColor);
button.addEventListener("click",randomColor);

