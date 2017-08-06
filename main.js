document.querySelector('.wrapper').onclick = function (e) {
  var a = e.target.parentElement;
  var b = document.querySelectorAll('.text');
  for (var i = 0; i < b.length; i++) {
    b[i].classList.add('hide');
  }
  a.children[2].classList.remove('hide');
};
