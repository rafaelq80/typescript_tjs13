import { Atleta } from "./IAtleta";

export interface Nadador extends Atleta{
    nadar(): void;
}