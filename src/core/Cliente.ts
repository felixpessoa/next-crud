export default class Cliente {
    private id: string;
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number, id: string = null) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    static vazio() {
        return new Cliente('', 0)
    }

    public getId() {
        return this.id;
    }

    public getNome() {
        return this.nome;
    }

    public getIdade() {
        return this.idade;
    }
}