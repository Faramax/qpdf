let Keyboard = window.SimpleKeyboard.default;
let KeyboardLayouts = window.SimpleKeyboardLayouts.default;

let RussianLayout = {name:"russian", impl: new KeyboardLayouts().get("russian")};
let EnglishLayout = {name:"english", impl: new KeyboardLayouts().get("english")};
let layout = RussianLayout;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: layout.impl
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
  switch (button) {
  case "{shift}":
    handleShift();
    break
  case "{Rus/Eng}":
    languageSwitch();
  }
  console.log("Button pressed", button);
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";
  keyboard.setOptions({layoutName: shiftToggle});
}

function languageSwitch() {
    switch (layout.name) {
    case "russian":
        layout = EnglishLayout
        break;
    case "english":
        layout = RussianLayout
        break;
    default:
    }
    keyboard.setOptions({layout: layout.impl });
}
