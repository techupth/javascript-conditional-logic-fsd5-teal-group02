//Exercise 3
// Ternary Operator
let lightBulbStatus = "Broken";

//Start coding here

lightBulbStatus === "On"
  ? console.log("Light bulb is On.")
  : lightBulbStatus === "Off"
  ? console.log("Light bulb is Off.")
  : lightBulbStatus === "Broken"
  ? console.log("The Light Bulb is Broken")
  : console.log("Please choose the correct input (On/Off).");
