const Background = require("./background/background");
const TextInputCanvas = require("./text_input/canvas_text");
const TextInput = require("./text_input/normal_text");
// import TextInput from "./text_input/normal_text";

document.addEventListener("DOMContentLoaded", () => {
  // document.body.innerHTML = ""; // resets everything
  Background("background");
  // TextInputCanvas("text-input-canvas");
  TextInput("text-input");
})