$(document).ready(function(){
    let players = {};

    $('#add-user').click(function(){
        $('#task-form').slideDown();
    });

    $('#cancel-button').click(function(){
        $('#task-form').slideUp();
    });

    $('#task-form').on('submit', function(e){
        e.preventDefault();
        const playerName = $('#player-name').val().trim();
        const taskName = $('#task-name').val().trim();
        if (!playerName || !taskName) return;

        if (!players[playerName]) {
            players[playerName] = [];
            $('#game-area').append(`
                <div class="player-box" id="player-${playerName}">
                    <h3>${playerName} <button class="delete-player" data-player="${playerName}">❌</button></h3>
                    <ul class="task-list"></ul>
                </div>
            `);
        }
        
        const taskId = `${playerName}-task-${players[playerName].length}`;
        players[playerName].push(taskId);
        
        let newTask = $(`
            <li id="${taskId}" class="task-item">
                <input type="text" class="task-text" value="${taskName}">
                <div class="task-buttons">
                    <button class="complete-task">✅</button>
                    <button class="delete-task">🗑️</button>
                </div>
            </li>
        `);
        
        newTask.find('.complete-task').click(function(){
            newTask.toggleClass('completed');
            checkWinner(playerName);
        });
        
        newTask.find('.delete-task').click(function(){
            newTask.remove();
            checkWinner(playerName);
        });
        
        $(`#player-${playerName} .task-list`).append(newTask);
        $('#task-form')[0].reset();
    });

    function checkWinner(playerName) {
        let allCompleted = $(`#player-${playerName} .task-item`).length > 0 && $(`#player-${playerName} .task-item:not(.completed)`).length === 0;
        if (allCompleted) {
            alert(`${playerName} concluiu todas as tarefas! Parabéns!`);
        }
    }


$(document).on('click', '.delete-player', function(){
        let playerName = $(this).data('player');
        $(`#player-${playerName}`).remove();
        delete players[playerName];
    });
});