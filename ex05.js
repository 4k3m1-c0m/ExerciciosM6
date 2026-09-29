function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        return null;
    }
}

console.log(safeParse('{"nome": "Kemmily"}'));
console.log(safeParse("texto inválido"));