"use strict";

var title = document.querySelector('.title');
var text = 'I Have Something'.split('');

for (var index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += "<span>".concat(text[index], "<span/>");
  } else {
    title.innerHTML += "<span style='margin-right: 20px;'><span/>";
  }
}

var textElements = document.querySelectorAll('.title span');
textElements.forEach(function (element) {
  var randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik

  element.style.animationDelay = "".concat(randomDelay, "s");
});