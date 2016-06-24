function slider(e) {
  var menu = document.querySelector('#menu');
  var main = document.querySelector('main');
  var drawer = document.querySelector('aside');
    drawer.classList.toggle('open');
    main.classList.toggle('open');
        e.stopPropagation();
    main.addEventListener('click', function() {
    drawer.classList.remove('open');
    main.classList.remove('open');

  });
}
