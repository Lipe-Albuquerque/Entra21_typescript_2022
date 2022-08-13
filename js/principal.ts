let nome:string = "nome"

let idade:number = 33;

console.log(nome, idade);

$('<p>', {text:`oi  ${nome}, você tem   ${idade} anos`}).appendTo("Body")

function teste():number {
    return 20;
}

function somar(numA:number,numB:number):number {
    return numA + numB;
}