var escolha1 = prompt("Digite 1º número: ");
var escolha2 = prompt("Digite 2º número: ");
var escolha3 = prompt("Digite 3º número: ");

var compare = function (a, b,c)
{
    if(a > b && a > c){
        return alert(a + " é o maior número");
      }
    
      if(a < b && b > c){
        return alert(b + " é o maior número");
      }
    
      if(c > a && b < c){
        return alert( c + " é o maior número",b);
      }

      if(a == b){
        return alert(a + " é igual a " + b);
    } 
      if(a == c)
        return alert(a + " é igual a " + c);

      if(b == c)
        return alert(b + " é igual a " + b);

      if(a == b && c==b)
            return alert(a + " é igual a " + " e igual a " + c);
}

compare(escolha1,escolha2, escolha3);