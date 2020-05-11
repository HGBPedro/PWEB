function Jokempo() {

    var pessoa = prompt("Pedra, papel ou tesoura");
    var computador = Math.round(Math.random() * (3 - 0) + 0);

    switch (pessoa) {
        case "pedra":
            pessoa = 0;
            break;
        case "papel":
            pessoa = 1;
            break;
        case "tesoura":
            pessoa = 2;
            break;
        default:
            alert("Valor inválido");
    }

    switch (computador) {
        case 0:
            alert("O computador esolheu pedra");
            break;
        case 1:
            alert("O computador esolheu papel");
            break;
        case 2:
            alert("O computador esolheu tesoura");
            break;
        default:
    }


    if (pessoa == computador)
        alert("Empate");
    else
        if (pessoa == 0) {
            if (computador == 1)
                alert("Computador venceu!!! \nPapel vence pedra");
            else
                alert("Jogador venceu!!! \nPedra vence tesoura");
        }
        else
            if (pessoa == 1) {
                if (computador == 0)
                    alert("Jogador venceu!!! \nPapel vence pedra");
                else
                    alert("Computador venceu!!! \nTesoura vence papel");
            }
            else
                if (computador == 0)
                    alert("Computador venceu!!! \nPedra vence tesoura");
                else
                    alert("Jogador venceu!!! \nTesoura vence papel");
}