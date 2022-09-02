var i;
function playAudio(eve)
{
  switch (eve) {
    case "w": new Audio("sound/crash.mp3").play();break;
    case "a": new Audio("sound/kick-bass.mp3").play();break;
    case "s": new Audio("sound/snare.mp3").play();break;
    case "d": new Audio("sound/tom-1.mp3").play();break;
    case "j": new Audio("sound/tom-2.mp3").play();break;
    case "k": new Audio("sound/tom-3.mp3").play();break;
    case "l": new Audio("sound/tom-4.mp3").play();break;
    default: break;
  }
}
function animate(keyPressed)
{
  document.querySelector("."+keyPressed).classList.add("pressed");
  document.querySelector(".fa-drum").classList.add("glow");
  setTimeout(function()
  {
    document.querySelector("."+keyPressed).classList.remove("pressed");
    document.querySelector(".fa-drum").classList.remove("glow");
  },200);
}
function rearrange(resolu)
{
  if (resolu.matches)
  { // If media query matches
    document.querySelector(".set").innerHTML="<button class='w drum'>w</button><button class='a drum'>a</button><div class='adjust'><button class='d drum'>d</button><button class='s drum'>s</button><button class='j drum'>j</button><div class='adjust'><button class='k drum'>k</button><button class='l drum'>l</button></div></div>";
  }
  else
  {
    document.querySelector(".set").innerHTML="<button class='w drum'>w</button><button class='a drum'>a</button><button class='s drum'>s</button><div class='adjust'><button class='d drum'>d</button><button class='j drum'>j</button><div class='adjust'><button class='k drum'>k</button><button class='l drum'>l</button></div></div>";
  }
  for(i=0 ; i<document.querySelectorAll(".drum").length ; i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
      playAudio(this.textContent);
      animate(this.textContent);
    });
  }
}

var resolu=window.matchMedia("(max-width: 730px)");
rearrange(resolu); // Call listener function at run time
resolu.addListener(rearrange); // Attach listener function on state changes

for(i=0 ; i<document.querySelectorAll(".drum").length ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    playAudio(this.textContent);
    animate(this.textContent);
  });
  document.addEventListener("keydown",function(event)
  {
    playAudio(event.key);
    animate(event.key);
  });
}
