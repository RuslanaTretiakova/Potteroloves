import { FC } from 'react';
import { ICharacter } from '../model/types';

interface ICharacterCard {
  character: ICharacter;
}

export const CharacterCard: FC<ICharacterCard> = ({ character }) => (
  <li>
    <h3>{character.fullName}</h3>
    <p>Nickname: {character.nickname}</p>
    <p>House: {character.hogwartsHouse}</p>
    <p>Played by: {character.interpretedBy}</p>
    <img src={character.image} alt={character.fullName} />
  </li>
);
