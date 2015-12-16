var output = document.getElementById("output");
function print(s) {
  output.innerText += s;
}

var board = ['_', '_', '_',
             '_', '_', '_',
             '_', '_', '_'];

var current_player = 'X';

// NOTE(dbp 2015-12-15): Takes index, tells you whether
// it is at the end of a line.
function end_of_line(idx) {
  if (typeof idx === "undefined") {
    print("usage: end_of_line(idx)\n");
  }

  return idx % 3 === 2;
}

function print_board(board) {
  if (typeof board === "undefined") {
    print("usage: print_board(some_board)\n");
  }
  board.map(function (x, idx) {
    print(x + " ");
    if (end_of_line(idx)) {
      print("\n");
    }
  });

  print("\n");
}

function swap_player(player) {
  if (typeof player === "undefined") {
    print("usage: swap_player(some_board)\n");
  }
  if (player === 'X') {
    return 'O';
  } else {
    return 'X';
  }
}

// NOTE(dbp 2015-12-15): position is 0-indexed on board. valid values are 0 - 8.
function legal_move(board, position) {
  if (typeof board === "undefined" || typeof position === "undefined") {
    print("usage: legal_move(some_board, a_position)\n");
  }
  if (position < 0 || position > 8) {
    print("position " + position + " is not on board!\n");
    return false;
  }
  if (board[position] !== '_') {
    return false;
  } else {
    return true;
  }
}

function start_game() {
  board = ['_', '_', '_',
           '_', '_', '_',
           '_', '_', '_'];
}

function human_turn(position) {
  if (typeof position === "undefined") {
    print("usage: my_turn(a_position)\n");
  }
  var current_player = 'X';
  if (legal_move(board, position)) {
    board[position] = current_player;
    print_board(board);
    current_player = swap_player(current_player);
  } else {
    print("Position is not legal. Please try another.\n");
    print_board(board);
  }

}

function auto_turn() {
  var open_spaces = board.map(function(_,idx) {
    return idx;
  }).filter(function(idx) {
    // NOTE(dbp 2015-12-15): Unoccupied spots.
    return board[idx] === '_';
  });

  var random_position = Math.floor(Math.random() * open_spaces.length);

  if (legal_move(board, random_position)) {
    board[random_position] = current_player;
    print_board(board);
    current_player = swap_player(current_player);
  } else {
    their_turn();
  }
}

function game_is_over(board) {
  if (typeof board === "undefined") {
    print("usage: game_is_over(some_board)\n");
  }
  // TODO(dbp 2015-12-15): Write this!
  return false;
}
