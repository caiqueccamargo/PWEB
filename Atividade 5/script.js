function calculoMedia()
{
  var media;
  var n1 = parseInt(document.getElementById('n1').value);
  var n2 = parseInt(document.getElementById('n2').value);
  var n3 = parseInt(document.getElementById('n3').value);
  media = (n1 + n2 + n3) / 3 ;
  alert("Média das notas: " + media + "");
}

function calculos()
{
  var soma;
  var sub;
  var div;
  var mult;
  var a1 = parseInt(document.getElementById('a1').value);
  var a2 = parseInt(document.getElementById('a2').value);

  soma = a1 + a2;
  sub = a1 - a2;
  div = a1 / a2;
  mult = a1 * a2;

  alert("Soma: " + soma + "");
  alert("Sub: " + sub + "");
  alert("Multiplicação: " + mult + "");
  alert("Divisão: " + div + "");

}