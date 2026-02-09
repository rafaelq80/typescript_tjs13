export class MaiorIdadeException extends Error{
    constructor(message: string){
        super();
        this.name = "Maior Idade Exception";
        this.message = message;
    }
}