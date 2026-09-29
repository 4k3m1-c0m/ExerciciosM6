class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo");
    }

    return "Idade válida";
}

function testarIdades() {
    const idades = [-5, 30, 200];

    for (const idade of idades) {
        try {
            console.log("Idade:", idade);
            console.log(checkAge(idade));
        } catch (erro) {
            console.log(erro.name + ": " + erro.message);
        }
    }
}

testarIdades();