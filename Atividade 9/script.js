var escolha1 = prompt("Digite 1º número: ");
var escolha2 = prompt("Digite 2º número: ");

function Retangulo(x, y) {
    var area;
    var x = escolha1;
    var y = escolha2;

    area = x * y;

    alert("Area: " + area);
}

Retangulo = new Retangulo(10, 20);