function soma(a, b) {
    console.log("Valor de a:", a);
    console.log("Valor de b:", b);

    const resultado = a + b;

    console.log("Resultado da soma:", resultado);

    return resultado;
}

console.log("Antes da soma:");

const resultado = soma(2, undefined);

console.log("Depois da soma:");
console.log("Resultado final:", resultado);

/*
O resultado é NaN porque b recebeu o valor undefined.
Ao realizar 2 + undefined, o resultado é NaN (Not a Number).
*/