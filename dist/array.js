"use strict";

// Array de nomes e notas
var alunos = ['Jeferson', 'Paula', 'Fernanda', 'Henrique', 'Bruno'];
var notas = [10, 9, 5, 7, 3];

// Cria um array de objetos com nome e nota
var listaAlunos = alunos.map(function (nome, index) {
  return {
    nome: nome,
    nota: notas[index]
  };
});

// Função que retorna apenas os alunos com nota >= 6
var filtrarAprovados = function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Testando a função
var alunosAprovados = filtrarAprovados(listaAlunos);
console.log(alunosAprovados);