function media() {
    var n1 = prompt("Digite o número 1");
    var n2 = prompt("Digite o número 2");
    var n3 = prompt("Digite o número 3");

    var media = parseFloat(n1) + parseFloat(n2) + parseFloat(n3);
    var media = media / 3;
    alert("A media e " + media);
}

function operacoes() {
    var n1 = prompt("Digite o número 1");
    var n2 = prompt("Digite o número 2");

    alert("Soma: " + (parseFloat(n1) + parseFloat(n2)));
    alert("Subtracao: " + (parseFloat(n1) - parseFloat(n2)));
    alert("Multiplicação: " + (parseFloat(n1) * parseFloat(n2)));
    alert("Divisão: " + (parseFloat(n1) / parseFloat(n2)));
    alert("Resto: " + (parseFloat(n1) % parseFloat(n2)));

}