
try{
    const resultado = converte("abc");

    console.log(resultado);
}catch(error){
    if (error instanceof TypeError)
        //console.error(`TypeError: ${error.message}`);
        console.error("Digite uma string!");
    else
        console.error(`Error: ${error}`);
}finally{
    console.log("Executei!")
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}