let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

// Update simple-keyboard when input is changed directly
document.querySelector(".toolbarField").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".toolbarField").value = input;
  PDFViewerApplication.findBar.dispatchEvent('');
  console.log("Input changed", input);
}

function onKeyPress(button){
  if (button === "{shift}" || button === "{lock}")
    handleShift();
  console.log("Button pressed", button);
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
