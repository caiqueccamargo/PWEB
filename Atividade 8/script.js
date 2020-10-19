var aluno1 = new Object();
    aluno1.ra = '001';
    aluno1.nome = "Caique Camargo";

alert(aluno1.ra);
alert(aluno1.nome);


var aluno2 = {
    nome: "Joao",
    ra: '002'
};
alert(aluno2.ra);
alert(aluno2.nome);

var aluno3 = {};
var ra = 'ra';
aluno3[ra] = '003';
var nome = 'nome';
aluno3[nome] = 'Mario';

alert(aluno3.ra);
alert(aluno3.nome);


