(function (window, document, undefined) {
  var menu = document.querySelector('#menu');
  var main = document.querySelector('main');
  var drawer = document.querySelector('.side');
  var matcher = window.matchMedia( "(max-width: 599px)" );
  matcher.addListener(chooseLayout);

// Define some functions to toggle the side panel with different media queries
  function panelToggleButtonMobile() {
    drawer.classList.toggle('open');
  }
  function panelToggleAreaMobile() {
    drawer.classList.remove('open');
  }
  function panelToggleButtonTablet() {
    drawer.classList.toggle('close');
    main.classList.toggle('close');
  }
  function panelToggleAreaTablet() {
    drawer.classList.add('close');
    main.classList.add('close');
  }

// Depending on the device viewport, we toggle classes and listeners
// to show or hide the side panel.
  function chooseLayout(matcher) {
    if (matcher.matches) {
      main.classList.remove('close');
      drawer.classList.remove('close');
      main.removeEventListener('click', panelToggleAreaTablet);
      menu.removeEventListener('click', panelToggleButtonTablet);
      menu.addEventListener('click', panelToggleButtonMobile);
      main.addEventListener('click', panelToggleAreaMobile);
    } else {
      drawer.classList.remove('open');
      drawer.classList.remove('open');
      main.removeEventListener('click', panelToggleAreaMobile);
      menu.removeEventListener('click', panelToggleButtonMobile);
      menu.addEventListener('click', panelToggleButtonTablet);
      main.addEventListener('click', panelToggleAreaTablet);
    }
  }
  chooseLayout(matcher);
})(window, document);
