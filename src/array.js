// Array de nomes e notas
const alunos = ['Jeferson', 'Paula', 'Fernanda', 'Henrique', 'Bruno'];
const notas = [10, 9, 5, 7, 3];

// Cria um array de objetos com nome e nota
const listaAlunos = alunos.map((nome, index) => ({
    nome: nome,
    nota: notas[index]
}));

// Função que retorna apenas os alunos com nota >= 6
const filtrarAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Testando a função
const alunosAprovados = filtrarAprovados(listaAlunos);

console.log(alunosAprovados);
