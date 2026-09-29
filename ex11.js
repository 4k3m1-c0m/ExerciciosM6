function testeDebug(x) {
    const y = x * 2;

    debugger;

    return y;
}

console.log(testeDebug(5));

/*
Relatório:
Quando a execução chega à instrução debugger, o navegador pausa
a execução do programa. Nesse momento, podemos visualizar os valores
das variáveis e avançar pela execução usando as ferramentas de depuração.
*/