// Retangulo
var retangulo = new Retangulo(10, 20);
console.log("Área do retângulo: " + retangulo.calcularArea());

console.log("\nCorrente:");
// Corrente
var corrente = new Corrente();
corrente.setNomeCorrentista("Felipe");
corrente.setBanco("Santander");
corrente.setNumeroConta(15425);
corrente.setSaldo(15);
corrente.setSaldoEspecial(1000);

console.log(corrente.getNomeCorrentista());
console.log(corrente.getBanco());
console.log(corrente.getNumeroConta());
console.log(corrente.getSaldo());
console.log(corrente.getSaldoEspecial());

// Poupança
var poupanca = new Poupanca();
poupanca.setNomeCorrentista("João do Vale");
poupanca.setBanco("Banco do Brasil");
poupanca.setNumeroConta(41233);
poupanca.setSaldo(100000);
poupanca.setJuros(0.01);
poupanca.setDataVencimento(new Date("2020-06-03"));

console.log("\nPoupança:");
console.log(poupanca.getNomeCorrentista());
console.log(poupanca.getBanco());
console.log(poupanca.getNumeroConta());
console.log(poupanca.getSaldo());
console.log(poupanca.getJuros());
console.log(poupanca.getDataVencimento());
