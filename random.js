  function show_image(src, width, height, alt) {
      var img = document.createElement("img");
      img.src = src;
      img.width = width;
      img.height = height;
      img.alt = alt;
      img.style.position = 'absolute';
      img.style.top = document.body.clientHeight * Math.random() + 'px';
      img.style.left = document.body.clientWidth * Math.random() + 'px';

      document.body.appendChild(img);
    }
    document.getElementById('touch').addEventListener('click', () =>
      show_image("data/blade.png", 17, 170,"touch")
    );
    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
