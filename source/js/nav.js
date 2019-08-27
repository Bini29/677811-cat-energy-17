var navMain = document.querySelector('.navgation');
var navToggle = document.querySelector('.navgation__toggle');

  navMain.classList.remove('navgation--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('navgation--closed')) {
      navMain.classList.remove('navgation--closed');
      navMain.classList.add('navgation--opened');
    } else {
      navMain.classList.add('navgation--closed');
      navMain.classList.remove('navgation--opened');
    }
  });
