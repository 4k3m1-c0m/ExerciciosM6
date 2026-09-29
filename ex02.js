function errosSemExcecoes() {
    let idade = 18;

    // Erro lógico: o programador queria verificar se a pessoa é maior de idade,
    // mas escreveu uma condição incorreta.
    if (idade > 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }

    console.log(
        "O código executou normalmente, mas apresentou um resultado incorreto."
    );
}

errosSemExcecoes();