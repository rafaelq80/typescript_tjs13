import { Jogador } from "./Jogador";
import { TriaAtleta } from "./TriAtleta";

console.log("Testes - Classe Triatleta\n");

const triatleta = new TriaAtleta("João");

triatleta.visualizar();
triatleta.aquecer();
triatleta.correr();
triatleta.nadar();
triatleta.pedalar();
triatleta.cansar();
triatleta.dormir();

console.log("\nTestes - Classe Jogador\n");

const jogador = new Jogador("Alvaro");

jogador.visualizar();
jogador.aquecer();
jogador.correr();
jogador.cansar();
jogador.dormir();