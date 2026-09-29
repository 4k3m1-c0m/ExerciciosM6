// EXERCÍCIO 13 - CALL STACK
// ============================================================

function externo(n) {
    console.log("Entrando na função externo()");
    return interno(n) + 1;
}

function interno(m) {
    console.log("Entrando na função interno()");

    // Neste momento, a Call Stack é:
    //
    // ▶ interno
    // ▶ externo
    // ▶ global

    console.log("\n=== CALL STACK ===");
    console.log("▶ interno");
    console.log("  ▶ externo");
    console.log("    ▶ global");

    return m * 3;
}

console.log("Resultado:", externo(4));

/*
A Call Stack armazena as funções que estão sendo executadas.

Quando externo(4) é chamada, ela entra na Call Stack.
Depois, externo() chama interno(), então interno() fica no topo
da pilha enquanto está sendo executada.

A representação é:

▶ interno
  ▶ externo
    ▶ global

Quando interno() termina, ela sai da Call Stack.
Depois, externo() termina e também sai da pilha.
*/