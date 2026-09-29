function safeParseCondicional(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        // Outros erros inesperados não devem ser ignorados.
        throw erro;
    }
}

console.log(safeParseCondicional('{"nome": Kemmily"}'));
console.log(safeParseCondicional("texto inválido"));