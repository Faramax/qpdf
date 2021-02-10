let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onKeyReleased: input => onKeyReleased(input),
  onKeyPress: button => onKeyPress(button)
});

function onKeyReleased(input){
  switch (input) {
  case "{shift}" :
     break
  case "{bksp}" :
     document.querySelector(".toolbarField").value = document.querySelector(".toolbarField").value.slice(0,-1);
     console.log("Bksp pressed", input);
     break
  default :
     document.querySelector(".toolbarField").value += input;
     console.log("Input changed", input);
  }
}

function onKeyPress(button){
  console.log("Button pressed", button);
}

