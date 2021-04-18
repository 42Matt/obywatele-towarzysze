import { Player } from 'utils/PlayerBuilder';
import Paragraph from 'components/atoms/Paragraph';

const playerOne = new Player('Zdzich', 120, { slynes: 10 });
playerOne.hp += 10;
playerOne.connections = 10;
playerOne.heal(4);
console.log(playerOne);

export const PlayerDiv = () => (
  <div>
    <Paragraph>{playerOne.name}</Paragraph>
    <Paragraph mid>Życie: {playerOne.hp}</Paragraph>
  </div>
);
