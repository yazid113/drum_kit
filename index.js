//Detection of click event
const buttons = document.querySelector('.set');
buttons.addEventListener('click', handleClick);
function handleClick(e){
  if (e.target.classList.contains('drum')) {
      makeSound(e.target.innerText)
      keyAnimation(e.target.innerText)
    }
  }
 

//Detection of key press
document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(e){
  makeSound(e.key)
  keyAnimation(e.key)
}


//Make the corrisponding sound when the right key is use
function makeSound(key){
  switch (key) {
    case 'w':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play()
      break;

    case 'a':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play()
      break;

    case 's':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play()
      break;

    case 'd':
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play()
      break;

    case 'j':
        var crash = new Audio('sounds/crash.mp3');
        crash.play()
      break;

    case 'k':
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play()
      break;

    case 'l':
        var snare = new Audio('sounds/snare.mp3');
        snare.play()
      break;
    default:

  }
}

//Make key animation
function keyAnimation(activeKey) {
  const activeButton = document.querySelector('.'+ activeKey)
  activeButton.classList.add("pressed")
  setTimeout(() => {
    activeButton.classList.remove("pressed")
  }, 100);
}