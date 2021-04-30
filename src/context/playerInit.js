export const Player = (
  name,
  position,
  { hp, slynes, connections = 0, item, speedBonus, dead = false } = {},
) => ({
  name,
  position,
  hp,
  slynes,
  connections,
  item,
  speedBonus,
  dead,
});
