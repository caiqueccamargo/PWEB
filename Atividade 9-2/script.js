function Conta(){
    var nome;
    this.getNome = function(){
        return nome;
    };
    this.setNome = function(value){
        nome = value;
    };

    var banco;
    this.getBanco = function(){
        return banco;
    };
    this.setBanco = function(value){
        banco = value;
    };

    var nConta;
    this.getNConta = function(){
        return nConta;
    };
    this.setNConta  = function(value){
        nConta = value;
    };

    var saldo;
    this.getSaldo = function(){
        return saldo;
    };
    this.setSaldo  = function(value){
        saldo = value;
    };
}

function Corrente (){

    var saldoEspecial;
    this.getSaldoEspecial = function(){
        return saldoEspecial;
    };
    this.setSaldoEspecial = function(value){
        saldoEspecial = value;
    };

}

function Poup(){
    var juros;
    this.getJuros = function(){
        return juros;
    };
    this.setJuros = function(value){
        juros = value;
    };

    var dataVenc;
    this.getDataVenc = function(){
        return dataVenc;
    };
    this.setDataVenc = function(value){
        dataVenc = value;
    };

}

Corrente.prototype = new Conta();
Poup.prototype = new Conta();

nCorrente = new Corrente();
nPoup = new Poup();

nCorrente.setNome('Caique');
nCorrente.setBanco('Nubank');
nCorrente.setSaldo('1000');
nCorrente.setNConta('1234');
nCorrente.setSaldoEspecial('2000');
nPoup.setJuros('12%');
nPoup.setDataVenc('30-Nov');


alert(nCorrente.getNome() + '\n' + nCorrente.getBanco() + '\n' + nCorrente.getSaldo() + '\n' + nCorrente.getNConta() + '\n' + nCorrente.getSaldoEspecial() + '\n' + nPoup.getJuros() + '\n' + nPoup.getDataVenc());
