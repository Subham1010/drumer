var x=document.querySelectorAll(".drum").length;
for(var i=0;i<x;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var buttonHtml=this.innerHTML;
     makeSound(buttonHtml);
     makeAnimation(buttonHtml);

  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});



function makeSound(key){

  switch(key)
  {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case "j":
    var cra = new Audio('sounds/crash.mp3');
    cra.play();
    break;
    case "k":
    var ki = new Audio('sounds/kick-bass.mp3');
    ki.play();
    break;
    case "l":
    var snr = new Audio('sounds/snare.mp3');
    snr.play();
  break;

  default:
  console.log();
  }


}

function makeAnimation(currentKey){
 var ani=document.querySelector("." + currentKey);
 ani.classList.add("pressed");

 setTimeout(function(){
   ani.classList.remove("pressed");
 },100);





}
// var audio = new Audio('sounds/crash.mp3');
// audio.play();
