var ID = "ig";

var IG = document.getElementById('aIg');
IG.onclick = function () { 
    var color = document.getElementById('ig').style.backgroundColor = '#0e0e0e';
    var color = document.getElementById('li-email').style.backgroundColor = '#00000000';
    var color = document.getElementById('In').style.backgroundColor = '#00000000';
    var color = document.getElementById('tw').style.backgroundColor = '#00000000';
 };

 var EMAIL = document.getElementById('aEmail');
 EMAIL.onclick = function () { 
    var color = document.getElementById('ig').style.backgroundColor = '#00000000';
    var color = document.getElementById('li-email').style.backgroundColor = '#0e0e0e';
    var color = document.getElementById('In').style.backgroundColor = '#00000000';
    var color = document.getElementById('tw').style.backgroundColor = '#00000000';
  };

  var IN = document.getElementById('aIn');
  IN.onclick = function () { 
    var color = document.getElementById('ig').style.backgroundColor = '#00000000';
    var color = document.getElementById('li-email').style.backgroundColor = '#00000000';
    var color = document.getElementById('In').style.backgroundColor = '#0e0e0e';
    var color = document.getElementById('tw').style.backgroundColor = '#00000000';
 };

 var TW = document.getElementById('aTw');
 TW.onclick = function () { 
    var color = document.getElementById('ig').style.backgroundColor = '#00000000';
    var color = document.getElementById('li-email').style.backgroundColor = '#00000000';
    var color = document.getElementById('In').style.backgroundColor = '#00000000';
    var color = document.getElementById('tw').style.backgroundColor = '#0e0e0e';
 };


 var boton = document.getElementById("copiador");
boton.addEventListener("click", copiarAlPortapapeles, false);
function copiarAlPortapapeles() {
  var enlace = document.getElementById("enlace");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Email copiado correctamente en el portapapeles!");
}