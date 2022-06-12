function get_screen(screen) {
  var screen;
  document.getElementById("screen").style.background =
    "url(img/" + screen + ".jpg)";
  document.getElementById("screen").style.backgroundSize = "cover";
  document.getElementById("screen").style.backgroundRepeat = "no-repeat";

  // remove number input
  document.getElementById("getNumber").innerHTML = "";
  document.getElementById("getNumber").style.display = "none";
}

function get_call(screen) {
  var screen;
  document.getElementById("screen").style.background =
    "url(img/" + screen + ".jpg)";
  document.getElementById("screen").style.backgroundSize = "cover";
  document.getElementById("screen").style.backgroundRepeat = "no-repeat";
  document.getElementById("getNumber").style.display = "block";
}

function getScreen() {
  return document.getElementById("getNumber").innerText;
}

function printScreen(num) {
  document.getElementById("getNumber").innerText = num;
}

