(function (window) {


var names = ["Raitul", "John", "Sams", "Jason", "Panna", "Rafid", "Umar", "Paula", "Chisty", "Jim"];

for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);