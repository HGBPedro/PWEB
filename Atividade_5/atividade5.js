function maior (){
    var n1 = prompt("Digite o primeiro numero:");
    var n2 = prompt("Digite o segundo numero:");
    var n3 = prompt("Digite o terceiro numero:");

    if(n1 > n2 && n1 > n3){
        alert("O primeiro número (" + n1 + ") é o maior");
    } else if (n2 > n1 && n2 > n3) {
        alert("O segundo número (" + n2 + ") é o maior");
    } else if (n3 > n2 && n3 > n1) {
        alert("O terceiro número (" + n3 + ") é o maior");
    } else if ( n1 == n2 || n1 == n3 || n2 == n3){
        alert("Os maiores números são iguais")
    }
}

function maiorv2(){
    var n1 = prompt("Digite o primeiro numero:");
    var n2 = prompt("Digite o segundo numero:");
    var n3 = prompt("Digite o terceiro numero:");

    var x = Math.max(n1,n2);
    var y = Math.max(n2,n3);

    if (x != y){
        alert("O maior numero é: " + Math.max(x,y));
    }
    else{
        alert("Os números são iguais");
    }
}