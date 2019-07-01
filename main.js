var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for(var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(images/pics1);
  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src', imgSrc);
    }
  }

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
  }


btn.onclick = function() {
var btnClass = btn.getAttribute('class');
if(btnClass === 'dark') {
  btn.setAttribute('class', 'light');
  btn.textContent = 'Lighten';
  overlay.style.backgroundColor = 'rgba(0,0,0,0)';
} else {
  btn.setAttribute('class', 'dark');
  btn.textContent = 'Darken';
  overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
}
