var Aluno1 = new Object();
var aluno1_nome =  'nome';
var aluno1_ra = 'ra';
Aluno1[aluno1_nome] = 'Pedro';
Aluno1[aluno1_ra] = '1004';

var Aluno2 = {
    nome: "Joberval",
    RA: "1005"
};

var Aluno3 = {};
Aluno3.nome = prompt("Digite o nome do terceiro aluno:")
Aluno3.RA = prompt("Digite o RA do terceiro aluno:")

alert("Aluno 1: " + Aluno1.nome + ". RA: " + Aluno1.ra)
alert("Aluno 2: " + Aluno2.nome + ". RA: " + Aluno2.RA)
alert("Aluno 3: " + Aluno3.nome + ". RA: " + Aluno3.RA)