/* Local replacement for the original site-root /js/main.js.
   Its only job here is to clear the loading overlay once the game paints. */
(function () {
  var tries = 0;
  var timer = setInterval(function () {
    var loader = document.getElementById('loader');
    var canvas = document.querySelector('#content canvas, #game canvas, canvas');
    if (loader && canvas) {
      loader.style.display = 'none';
      clearInterval(timer);
    }
    if (++tries > 300) clearInterval(timer);
  }, 100);
  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('loader');
      if (loader) loader.style.display = 'none';
    }, 4000);
  });
})();