let serviceLinks = document.querySelectorAll('#navLinks > div:nth-of-type(1)')[0]
let meetLinks = document.querySelectorAll('#navLinks > div:nth-of-type(3)')[0]
let aboutLinks = document.querySelectorAll('#navLinks > div:nth-of-type(5)')[0]
let moreInfo1 = document.querySelectorAll('.moreInfo')[0];
let moreInfo2 = document.querySelectorAll('.moreInfo')[1];

serviceLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela2", 500);
})

meetLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela8", 500);
})

aboutLinks.addEventListener('click', function() {
  SmoothScrollTo("#tela5", 500);
})

moreInfo1.addEventListener('click', function() {
  SmoothScrollTo("#tela3", 500);
})

moreInfo2.addEventListener('click', function() {
  SmoothScrollTo("#tela4", 500);
})



function SmoothScrollTo(id_or_Name, timelength) {
  var timelength = timelength || 1000;
  $('html, body').animate({
    scrollTop: $(id_or_Name).offset().top - 70
  }, timelength, function() {
    window.location.hash = id_or_Name;
  });
}
