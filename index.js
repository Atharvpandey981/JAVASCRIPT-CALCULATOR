let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let upper_screen = document.getElementById("upper_screen");
let screenValue = "";
let upper_screenValue ="";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);

    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      input.addEventListener("keydown", function (event) {
        const key = event.key; // const {key} = event; ES6+
       
      });
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
        upper_screenValue = screenValue;
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
     
    }
  });
}
