let nome = "nome";
let idade = 33;
console.log(nome, idade);
$('<p>', { text: `oi  ${nome}, você tem   ${idade} anos` }).appendTo("Body");
function teste() {
    return 20;
}
function somar(numA, numB) {
    return numA + numB;
}
