let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

function onChange(input){
  document.querySelector(".toolbarField").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}

