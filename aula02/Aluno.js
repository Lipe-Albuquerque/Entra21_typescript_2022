export class Aluno {
    //Construtor
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    //métodos
    aprensetar() {
        return `Oi meu nome é: ${this.nome} e minha idade é: ${this.idade}`;
    }
    calcularMedia() {
        let soma = 0;
        this.notas.forEach((nota) => {
            soma += nota;
        });
        return soma / this.notas.length;
        // return this.notas.reduce((anterior, posterior)=> anterior + posterior, 0)/this.notas.length
    }
}
