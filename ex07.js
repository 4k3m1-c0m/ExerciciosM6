function safeParseFinally(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    } finally {
        console.log("Parse attempt finished");
    }
}

console.log("Teste com JSON válido:");
console.log(safeParseFinally('{"nome": "Kemmily"}'));

console.log("Teste com JSON inválido:");
console.log(safeParseFinally("texto inválido"));