const figlet = require("figlet")

async function doStuff() {
  const text = await figlet.text("Anmol");
  console.log(text);
}

doStuff();