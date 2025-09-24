// 1 - Number
console.log("\nNumber");

console.log(2);
console.log(typeof 2);
console.log(14.3);
console.log(typeof 14.3);
console.log(-5);
console.log(typeof -5);

// 2 - Ops
console.log("\nOps");

console.log("Soma: ", 2 + 2);
console.log("Subtração: ", 10 - 5);
console.log("Divisao: " + 4 / 2);
console.log("Produto: " + 5 * 10);
console.log("Operacao: ", 2 + (2 * 2));

// 3 - Special Numbers
console.log("\nSpecial Numbers");

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "OI");
console.log(typeof NaN);

// 4 - Strings
console.log("\nStrings");

console.log("Um texto");
console.log('Outro texto');
console.log(`Mais um texto`);

// 5 - Caracteres Especiais
console.log("\nCaracteres Especiais");

console.log("Quebrando a \n linha!");
console.log("Espaçamento de \t tab");

// 6 - Concatenação de Strings
console.log("\nConcatenação de Strings");

console.log("Eu " + "sou " + "o Henrique!");

// 7 - Interpolação (Template String)
console.log("\nInterpolação (Template String)");

console.log(`A soma de 2 + 2 é ${2 + 2}`);
console.log(`Podemos executar qualquer tipo de coisa ${console.log("teste")}`);

// 8 - Boolean 
console.log("\nBoolean");

console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof true);

// 9 - Comparações
console.log("\nComparações");

console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Identico
console.log("\nIdentico");

console.log(9 === "9");
console.log(10 !== "10");

// 11 - Operadores Logicos
console.log("\nOperadores Logicos");

console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!false);
console.log(5<100 && 6>2);
console.log(100<2 && 11>100);
console.log(5 === "5" || 3 !== 3);

console.log("5 é maior que 2? ", 5>2);
console.log("A operação de cima negada é igual a = ", !5>2);

// 12 - Empty values
console.log("\nEmpty values");

console.log(typeof null, typeof undefined);

// 13 - Mudança de tipos
console.log("\nMudança de tipos");

console.log(5 * null);
console.log("ooi" * "tchauu");
console.log("5" * "5");
console.log("10" + 1);
console.log("10" - 1);