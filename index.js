
// handleclick()  not used bcz it will give automatic result not wait for the click
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked");
//     // when button gets clicked
// }

// or we can implement it with anonymous function
// it will increse the readibility and decrease the lines of code




// for all button in one loop
// detecting button press
var numberOfDrumButtens = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtens; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked");
    // when button gets clicked

    // this.innerHTML = "A";
    // this.style.color = "white";


    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detection keyboard press
document.addEventListener("keydown", function (event) {
  // console.log(event);
  makeSound(event.key);
  // it  tells which keyboard key get pressed
  // that's why we write event.key 
  //  thisalert("Key was pressed!");
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "W":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "A":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "S":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "D":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "J":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "K":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;


    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "L":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100)
}


