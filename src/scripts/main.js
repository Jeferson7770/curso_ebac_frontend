document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-sorteador');
    const resultado = document.getElementById('resultado-valor');
    const resultadoBox = document.querySelector('.resultado');
    const historico = document.getElementById('historico');

    // Criar botão de reinício (inicialmente escondido)
    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = "Reiniciar Bingo";
    botaoReiniciar.style.display = "none";
    botaoReiniciar.type = "button"; // evita submit
    botaoReiniciar.className = "btn btn-warning ms-2"; 
    
    // Coloca o botão dentro do form, ao lado do botão "Sortear"
    const botaoSortear = form.querySelector('button[type="submit"]');
    botaoSortear.insertAdjacentElement("afterend", botaoReiniciar);

    // Arrays para controle dos números
    let numerosDisponiveis = [];
    let numerosSorteados = [];
    let jogoFinalizado = false; // controla se acabou o bingo

    // Inicia bingo ao enviar o formulário
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

        // Impede sortear novamente se o bingo já acabou
        if (jogoFinalizado) {
            return;
        }

        // Se for a primeira vez, cria lista de números
        if (numerosDisponiveis.length === 0 && numerosSorteados.length === 0) {
            numerosDisponiveis = Array.from({ length: numeroMaximo }, (_, i) => i + 1);
            historico.innerHTML = ""; // limpa histórico
        }

        // Verifica se ainda tem número para sortear
        if (numerosDisponiveis.length === 0) {
            alert("Todos os números já foram sorteados!");
            botaoReiniciar.style.display = "inline-block"; // mostra botão
            jogoFinalizado = true; // trava o sorteio
            return;
        }

        resultadoBox.style.display = 'block';

        // Animação de roleta
        let intervalo = setInterval(() => {
            let numeroTemp = Math.floor(Math.random() * numeroMaximo) + 1;
            resultado.innerText = numeroTemp;
        }, 100);

        // Para após 5 segundos e mostra o sorteado real
        setTimeout(() => {
            clearInterval(intervalo);

            // Escolhe um número aleatório da lista de disponíveis
            let indice = Math.floor(Math.random() * numerosDisponiveis.length);
            let numeroAleatorio = numerosDisponiveis.splice(indice, 1)[0]; // remove da lista
            numerosSorteados.push(numeroAleatorio);

            // Mostra o resultado final
            resultado.innerText = numeroAleatorio;

            // Salva no histórico
            let li = document.createElement('li');
            li.textContent = numeroAleatorio;
            historico.appendChild(li);

            // Se acabou, mostra botão e trava o jogo
            if (numerosDisponiveis.length === 0) {
                botaoReiniciar.style.display = "inline-block";
                jogoFinalizado = true;
            }

        }, 5000); // tempo da "roleta"
    });

    // Reinicia o bingo
    botaoReiniciar.addEventListener('click', function () {
        numerosDisponiveis = [];
        numerosSorteados = [];
        resultado.innerText = "";
        historico.innerHTML = "";
        resultadoBox.style.display = "none";
        botaoReiniciar.style.display = "none"; // esconde o botão
        jogoFinalizado = false; // libera novamente
        alert("Bingo reiniciado! Informe o número máximo novamente.");
    });
});
