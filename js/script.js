(function (window, document, undefined) {
  var menu = document.querySelector('#menu');
  var main = document.querySelector('main');
  var drawer = document.querySelector('.side');
  var mq = window.matchMedia( "(max-width: 599px)" );
  mq.addListener(doSomething);

  function e() {
    drawer.classList.toggle('open');
    main.classList.toggle('open');
    // e.stopPropagation();
  }
  function f() {
    drawer.classList.remove('open');
    main.classList.remove('open');
    // f.stopPropagation();
  }
  function g() {
    drawer.classList.toggle('close');
    main.classList.toggle('close');
    // g.stopPropagation();
  }
  function h() {
    drawer.classList.add('close');
    main.classList.add('close');
    // h.stopPropagation();
  }

  function doSomething(mq) {
    if (mq.matches) {
      main.removeEventListener('click', h);
      menu.removeEventListener('click', g);
      menu.addEventListener('click', e);
      main.addEventListener('click', f);
    } else {
      main.removeEventListener('click', f);
      menu.removeEventListener('click', e);
      menu.addEventListener('click', g);
      main.addEventListener('click', h);
    }
  }
  doSomething(mq);
})(window, document);
