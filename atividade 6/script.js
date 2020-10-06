var escolhaUsuario = prompt("Qual sua escolha? Pedra, Papel ou Tesoura?");

var escolhaPC = Math.random();

if (escolhaPC < 0.34) {

    escolhaPC = "pedra";

} else if(escolhaPC <= 0.67) {

    escolhaPC = "papel";

} else {

    escolhaPC = "tesoura";

} alert("Computer: " + escolhaPC);

var compare = function (escolha1, escolha2) {

    if (escolha1 === escolha2)

    return alert("Empate!")

    else if (escolha1 === "pedra") {

        if (escolha2 === "tesoura")

        return alert("Pedra quebrou a tesoura")

        else {

            return alert("papel venceu!")

        }
    }

    else if (escolha1 === "papel") {

        if (escolha2 === "pedra")

        return alert("Papel cobriu a pedra!")

        else {

            return alert("Tesoura venceu!")

        }
    }
    else if (escolha1 === "tesoura") {

        if (escolha2 === "pedra")

        return alert("Pedra quebrou a tesoura!")

        else {

            return alert("Tesoura venceu!")

        }
    }
};

compare(escolhaUsuario,escolhaPC)