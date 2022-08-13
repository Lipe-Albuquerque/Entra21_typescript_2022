import { Aluno } from './../aula02/Aluno.js';
import { Animal } from "../aula02/Animal.js";

console.log("Aula 2 funcionando!");

let animal1:Animal = new Animal("HIDROSOFILA MENOGOSTA", "Mosca", 0.1, ["Ar", "lixo", "comida"])

console.log(animal1);

console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);

console.log(animal1.getEspecie);


animal1.nome="cachorro"
animal1.peso=4
animal1.habitat[1]="rua"
animal1.setEspecie="lobisome"

let macaco:Animal = new Animal("Macaco", "macaquinho azul", 5, ["Floresta","selva ","ruas","cidade pequenas"]);

macaco.nome = "Macaco-prego"
macaco.peso = 3
macaco.habitat[1] = "Sei la kk"
macaco.setEspecie = "Macaquinhos magicos"

let tubarao:Animal = new Animal("Tubarão", "peixe", 100, ["mar", "mar", "mar"])

tubarao.nome = "Tubarão-Branco"

console.log(tubarao)
console.log(macaco);

let filipe:Aluno  = new Aluno("Filipe",20, [10,10,10])

console.log(filipe);
console.log(filipe.nome);
console.log(filipe.idade);
console.log(filipe.aprensetar());

console.log(filipe.calcularMedia());




