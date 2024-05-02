let numerador = parseInt(prompt("Digite o numerador: "));
let denominador = parseInt(prompt("Digite o denominador: "));

if (denominador == 0) {
    alert("Não é possível dividir por zero.");
}

else {
    let quociente = numerador / denominador;

    alert(numerador + " " + "dividido por " + denominador + " é: " + quociente);
}