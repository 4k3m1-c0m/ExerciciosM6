function confiabilidadeLimitada() {
    /*
    Não deve-se confiar plenamente nos dados recebidos do usuário,
    principalmente em formulários, cadastros e sistemas online.

    Exemplo:
    O programa espera receber um número, mas o usuário pode digitar texto.
    Por isso, devemos validar o tipo e o conteúdo antes de utilizar o dado.
    */

    const entrada = "20";

    if (typeof entrada !== "number") {
        console.log("Erro: era esperado um número, mas foi recebida uma string.");
    } else {
        console.log("Entrada válida:", entrada);
    }
}

confiabilidadeLimitada();