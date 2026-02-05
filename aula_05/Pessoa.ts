export abstract class Pessoa{

    private _nome: string;

    constructor(nome:string){
        this._nome = nome;
    }

    public get nome(): string{
        return this._nome;
    }

    public set nome(value: string){
        this._nome = value;
    }

    // Métodos Abstratos
    public abstract cansar(): void;
    public abstract dormir(): void;

    public visualizar(): void{
        console.log("Nome: ", this._nome);
    }

}