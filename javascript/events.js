let serviceLinks = document.querySelector('#navLinks > div:nth-of-type(1)')
let meetLinks = document.querySelector('#navLinks > div:nth-of-type(3)')
let aboutLinks = document.querySelector('#navLinks > div:nth-of-type(5)')
let moreInfo1 = document.querySelectorAll('.moreInfo')[0];
let moreInfo2 = document.querySelectorAll('.moreInfo')[1];
let btnLogin = document.getElementById('login');
let btnRegister = document.getElementById('register');
let btnFechaLogin = document.getElementById('fechaLogin');
let btnFechaCadastro = document.getElementById('fechaCadastro');
let telaDeLogin = document.getElementById('telaDeLogin');
let fechaMenLateral = document.getElementById('fechaMenLateral');
let hamburguer = document.getElementById('hamburguer');
let nav = document.getElementById('nav');
let bandeiras = document.querySelectorAll('#caixaCentral .aeonis > div');
let telaInicial = document.querySelector('#telaInicial');
let telaDeCadastro = document.getElementById('telaDeCadastro');

hamburguer.addEventListener('click', revelaNav);
fechaMenLateral.addEventListener('click', recolheNav);
bandeiras.forEach((item, i) => {
  item.addEventListener('click', inicio)
});


btnLogin.addEventListener('click', function() {
  fnLoginForm();
  if (celular()) {
    recolheNav();
  }
});
btnRegister.addEventListener('click', function() {
  fnRegisterForm();
  if (celular()) {
    recolheNav();
  }
});
btnFechaLogin.addEventListener('click', fnFechaLogin);
btnFechaCadastro.addEventListener('click', fnFechaCadastro);
serviceLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela2", 500);
  if (celular()) {
    recolheNav();
  }
})

meetLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela8", 500);
  if (celular()) {
    recolheNav();
  }
})

aboutLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela5", 500);
  if (celular()) {
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
  telaDeLogin.style.display = 'block';
}

function fnRegisterForm() {
  telaDeCadastro.style.display = 'block';
}

function fnFechaLogin() {
  telaDeLogin.style.display = 'none';
}

function fnFechaCadastro() {
  telaDeCadastro.style.display = 'none';
}

function inicio(){
  let escondidos = document.querySelectorAll('.escondido')
  escondidos.forEach((item, i) => {
    item.classList.remove('escondido');
    item.style.opacity = '1';
  });
  telaInicial.classList.add('escondido');
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
  console.log(window.screen.width)
  if (window.screen.width < 576) {
    return (true);
  } else {
    return (false);
  }
}
