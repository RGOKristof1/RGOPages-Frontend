import os
import time
os.system('cls' if os.name == 'nt' else 'clear')

class Player:
  def __init__(self, name, score, average):
    self.name = name
    self.score = score
    self.average = average

players = []

os.system('cls' if os.name == 'nt' else 'clear')
gameLength = int(input("A Jatek Hossza: "))
time.sleep(1)
os.system('cls' if os.name == 'nt' else 'clear')

print("Type the player(s) name. Leave blank if done!")
while True:
  player = str(input("Type player name: "))
  if len(players) <= 0 and player == "":
    print("There's no players!")
  elif len(players) > 0 and player == "":
    os.system('cls' if os.name == 'nt' else 'clear')
    break
  else:
    players.append(player)


print(f"Player count:{len(players)}")
print("Player(s):", end=" ")
for player in players:
  print(f"{player}", end=" ")
print()
time.sleep(len(players))
os.system('cls' if os.name == 'nt' else 'clear')

for i in range(len(players)):
  players[i] = Player(players[i],0,0)

input("Press Enter to start!")

# per-round storage: list of lists, same order as `players`
round_scores = [[] for _ in players]
# song names per round
songs = []

for i in range(gameLength):
  print(f"Round {i+1}.")
  song = input("Song: ")
  songs.append(song)

  for i2 in range(len(players)):
    scoreInput = int(input(f"How many points did {players[i2].name} got: "))
    print(players[i2].name)
    players[i2].score += scoreInput
    # record this round's score for this player
    round_scores[i2].append(scoreInput)
    players[i2].average = players[i2].score / (i+1)
  os.system('cls' if os.name == 'nt' else 'clear')
  print(f"{i+1}. Round over!\tAverage\tOverall")

  for i2 in range(len(players)):
    print(f"\t{players[i2].name}\t{players[i2].average:.2f}\t{players[i2].score}")
  input("Press enter to continue!")
  os.system('cls' if os.name == 'nt' else 'clear')

print("Game summary:")
for r in range(gameLength):
  print()
  print(f"{songs[r]}:")
  for idx, p in enumerate(players):
    score = round_scores[idx][r] if r < len(round_scores[idx]) else 0
    print(f"\t{p.name}:\t{score}")

print()
print("---------------------------------------")
print()

for idx, p in enumerate(players):
  total = sum(round_scores[idx])
  avg = total / gameLength if gameLength > 0 else 0
  print(f"{p.name}:\tAverage\tOverall")
  print(f"\t{avg:.2f}\t{total}")

