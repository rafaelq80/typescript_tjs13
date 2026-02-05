import { Ciclista } from "./ICiclista";
import { Corredor } from "./ICorredor";
import { Nadador } from "./INadador";
import { Pessoa } from "./Pessoa";

export class TriaAtleta extends Pessoa implements Ciclista, Corredor, Nadador{
    
    constructor(nome: string) {
        super(nome);
	}

    public aquecer(): void {
        console.log("Triatleta Aquecendo");
    }
    
    public cansar(): void {
        console.log("Triatleta Cansou");
    }

    public dormir(): void {
        console.log("Triatleta Dormiu");
    }
   
    public pedalar(): void {
        console.log("Triatleta Pedalando");
    }

    public correr(): void {
        console.log("Triatleta Correndo");
    }

    public nadar(): void {
        console.log("Triatleta Nadando");
    }
    
}