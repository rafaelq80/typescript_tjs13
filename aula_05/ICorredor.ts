import { Atleta } from "./IAtleta";

export interface Corredor extends Atleta{
    correr(): void;
}