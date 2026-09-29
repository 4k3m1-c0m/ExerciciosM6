function externo(n) {
    return interno(n) + 1;
}

function interno(m) {
    return m * 3;
}

console.log(externo(4));

/*
Step Over:
Executa a chamada da função interno sem entrar no código dela.
O depurador passa para a próxima linha da função atual.

Step Into:
Entra dentro da função interno e permite acompanhar sua execução
linha por linha.

Step Out:
Quando estamos dentro de interno, executa o restante dessa função
e retorna para a função externo.
*/