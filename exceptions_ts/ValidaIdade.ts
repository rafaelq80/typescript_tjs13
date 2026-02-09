import readline = require("readline-sync");
import { MaiorIdadeException } from "./MaiorIdadeException";

let continua: boolean = true;

do{

        try{
                let idade: number = readline.questionInt("Digite a idade: ");
                validarIdade(idade);

                continua = false;
        }catch(error){
                if (error instanceof MaiorIdadeException){
                        console.error(`Erro: ${error.name}`);
                        console.error(`Erro: ${error.message}`);
                        console.error("Digite um número inteiro maior ou igual a 18");
                }else
                        console.error(`Erro: ${error}`); 
        }

}while(continua);

function validarIdade(idade: number): void {
    if (idade >= 18)
        console.log("A pessoa é maior de idade!");
    else
        throw new MaiorIdadeException("A Pessoa não está apta a dirigir!");
}