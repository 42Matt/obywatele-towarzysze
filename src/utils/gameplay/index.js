export function rollDice(min = 1, max = 6) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getFixedPosition(currentPosition, dislocation, modifier = 1, lastField = 10) {
  const futurePosition = currentPosition + dislocation * modifier;
  if (futurePosition > lastField) {
    return futurePosition % lastField;
  }
  return futurePosition;
}

export function gameInit() {
  // createPlayer and dispatch data
  // setInitPositions();
  // drawPlayers()
}

// winningConditions()
