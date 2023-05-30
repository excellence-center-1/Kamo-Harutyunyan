const board_size = parseInt(prompt("Enter the board size of the game - "));
const board = [];
let winner = 0;
let current_player = 1;
let move_checker_bul = true;
for (let i = 0; i < board_size; ++i){
    let tmp_arr = [];
    for (let j = 0; j < board_size; ++j){
        tmp_arr.push("*");
    }
    board.push(tmp_arr);
}
const win_checker = (row, col) => {
    if (current_player === 1){
        if (row === 0){
            if (board[row + 1][col] === board[row][col] && board[row][col] === board[row + 2][col]){
                return 1;
            }
            else if (col === 0){
                if (board[row + 1][col + 1] === board[row][col] && board[row][col] === board[row + 2][col + 2]){
                    return 1;
                }
            }
            else if (col === board_size - 1){
                if (board[row + 1][col - 1] === board[row][col] && board[row][col] === board[row + 2][col - 2]){
                    return 1;
                }
            }
        }
        else if (row === board_size - 1){
            if (board[row - 1][col] === board[row][col] && board[row][col] === board[row - 2][col]){
                return 1;
            }
            else if (col === 0){
                if (board[row - 1][col + 1] === board[row][col] && board[row][col] === board[row - 2][col + 2]){
                    return 1;
                }
            }
            else if (col === board_size - 1){
                if (board[row - 1][col - 1] === board[row][col] && board[row][col] === board[row - 2][col - 2]){
                    return 1;
                }
            }
        }
        else if (col === board_size - 1){
            if (board[row - 1][col] === board[row][col] && board[row][col] === board[row - 2][col]){
                return 1;
            }
            else if (col === 0){
                if (board[row - 1][col + 1] === board[row][col] && board[row][col] === board[row - 2][col + 2]){
                    return 1;
                }
            }
            else if (col === board_size - 1){
                if (board[row - 1][col - 1] === board[row][col] && board[row][col] === board[row - 2][col - 2]){
                    return 1;
                }
            }
        }

    }
}
const start_game = () => {
    while (true){
        move()
    }
}
const move_checker = (number) => {
    return number < board_size && number > -1;
}
const move = () => {
    let col;
    let row;
    while (true){
        col = parseInt(prompt(`Player ${current_player} enter the column - `));
         if (move_checker(col)){
            break;
        }
    }
    while (true){
        row = parseInt(prompt(`Player ${current_player} enter the row - `));
        if (move_checker(row)){
            break;
        }
    }
    if (board[col][row] === "*"){
        if (current_player === 1){
            board[col][row] = "X";
            current_player = 2;
        }
        else {
            board[col][row] = "O";
            current_player = 1;
        }
    }
    else{
        move()
    }
}

for (let i = 0; i < board_size; ++i){
    console.log (board[i]);
}

console.log ("Player 1 is <<X>>, Player 2 is <<O>>");
move()
for (let i = 0; i < board_size; ++i){
    console.log (board[i]);
}

