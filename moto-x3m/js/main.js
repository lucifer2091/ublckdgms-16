/* Clears the loading overlay once the game paints. */
(function () {
  var tries = 0;
  var timer = setInterval(function () {
    var loader = document.getElementById('loader');
    var canvas = document.querySelector('#content canvas, #game canvas, canvas');
    if (loader && canvas) { loader.style.display = 'none'; clearInterval(timer); }
    if (++tries > 300) clearInterval(timer);
  }, 100);
  window.addEventListener('load', function () {
    setTimeout(function () {
      var l = document.getElementById('loader');
      if (l) l.style.display = 'none';
    }, 4000);
  });
})();