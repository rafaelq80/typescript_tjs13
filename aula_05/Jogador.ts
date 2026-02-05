import { Corredor } from "./ICorredor";
import { Pessoa } from "./Pessoa";

export class Jogador extends Pessoa implements Corredor{
   
	constructor(nome: string) {
        super(nome);
	}

    public aquecer(): void {
        console.log("Jogador Aquecendo");
    }

    public correr(): void {
        console.log("Jogador Correndo");
    }
   
    public cansar(): void {
        console.log("Jogador Cansou após 90 minutos de jogo!")
    }

    public dormir(): void {
        console.log("Jogador Dormiu!")
    }

}