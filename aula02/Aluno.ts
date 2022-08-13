export class Aluno {
  //Atributos
  public nome: string;
  public idade: number;
  private notas: Array<number>;
  //Construtor
  constructor(nome: string, idade: number, notas: Array<number>) {
    this.nome = nome;
    this.idade = idade;
    this.notas = notas;
  }

  //métodos

  public aprensetar(): string {
    return `Oi meu nome é: ${this.nome} e minha idade é: ${this.idade}`;
  }

  public calcularMedia(): number {
    let soma: number = 0;
    this.notas.forEach((nota) => {
      soma += nota;
    });
    return soma / this.notas.length;
    // return this.notas.reduce((anterior, posterior)=> anterior + posterior, 0)/this.notas.length
  }
}
