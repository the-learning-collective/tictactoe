from random import randrange
import sys

prnt = sys.stdout.write

board = ['_', '_', '_',
         '_', '_', '_',
         '_', '_', '_']

def end_of_line(idx):
    return idx % 3 == 2

def print_board(board):
  """ This function prints out the board """

  def print_one(pair):
      (idx, x) = pair
      prnt(x + " ")
      if end_of_line(idx):
          prnt("\n")
  map(print_one, enumerate(board))

  # for idx in range(len(board)):
  #     prnt(board[idx] + " ")
  #     if (idx + 1) % 3 == 0:
  #         prnt("\n")

  prnt("\n")


def swap_player(player):
  if player == 'X':
    return 'O'
  elif player == 'O':
    return 'X'
  else:
    raise ValueError("swap_player expected 'X' or 'O'")

# TODO(dbp 2015-12-15): position is 0-indexed on board. valid values are 0 - 8.
def legal_move(board, position):
  if position < 0 or position > 8:
    prnt("position " + str(position) + " is not on board!\n");
    return False
  if board[position] != '_':
    return False
  else:
    return True

def start_game():
  board = ['_', '_', '_',
           '_', '_', '_',
           '_', '_', '_']

def human_turn(position, current_player):
  if legal_move(board, position):
    board[position] = current_player
    print_board(board)
    return swap_player(current_player)
  else:
    prnt("Position is not legal. Please try another.\n")
    print_board(board)

def auto_turn(current_player):
  open_spaces = filter(lambda idx: board[idx] == '_', range(len(board)))

  # TODO(dbp 2015-12-15): only choose from open spaces
  random_position = randrange(len(open_spaces))

  if legal_move(board, random_position):
    board[random_position] = current_player
    print_board(board)
    return swap_player(current_player)
  else:
    auto_turn();

def game_is_over(board):
  # TODO(dbp 2015-12-15): Write this!
  return False
