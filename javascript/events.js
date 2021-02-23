let serviceLinks = document.querySelectorAll('#navLinks > div:nth-of-type(1)')[0]
let meetLinks = document.querySelectorAll('#navLinks > div:nth-of-type(3)')[0]
let aboutLinks = document.querySelectorAll('#navLinks > div:nth-of-type(5)')[0]
let moreInfo1 = document.querySelectorAll('.moreInfo')[0];
let moreInfo2 = document.querySelectorAll('.moreInfo')[1];
let btnLogin = document.getElementById('login');
let btnFechaLogin = document.getElementById('fechaLogin');
let telaDeLogin = document.getElementById('telaDeLogin');
let fechaMenLateral = document.getElementById('fechaMenLateral');
let hamburguer = document.getElementById('hamburguer');
let nav = document.getElementById('nav');

hamburguer.addEventListener('click', revelaNav);
fechaMenLateral.addEventListener('click', recolheNav);

btnLogin.addEventListener('click', function() {
  fnLoginForm();
  if (celular) {
    recolheNav();
  }
});
btnFechaLogin.addEventListener('click', fnFechaLogin);

serviceLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela2", 500);
  if (celular) {
    recolheNav();
  }
})

meetLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela8", 500);
  if (celular) {
    recolheNav();
  }
})

aboutLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela5", 500);
  if (celular) {
    recolheNav();
  }
})

moreInfo1.addEventListener('click', function() {
  SmoothScrollTo("#tela3", 500);
})

moreInfo2.addEventListener('click', function() {
  SmoothScrollTo("#tela4", 500);
})

function recolheNav() {
  fechaMenLateral.style.left = '-240px';
  hamburguer.style.left = '15px';
  nav.style.left = '-240px';
}

function revelaNav() {
  fechaMenLateral.style.left = '190px';
  hamburguer.style.left = '-240px';
  nav.style.left = '0px';
}

function fnLoginForm() {
  console.log('entrei aqui')
  telaDeLogin.style.display = 'block';
}

function fnFechaLogin() {
  telaDeLogin.style.display = 'none';
}

function SmoothScrollTo(id_or_Name, timelength) {
  var timelength = timelength || 1000;
  $('html, body').animate({
    scrollTop: $(id_or_Name).offset().top - 70
  }, timelength, function() {
    window.location.hash = id_or_Name;
  });
}

function celular() {
  if (window.screen.width < 576) {
    return (true);
  } else {
    return (false);
  }
}
