import { FC } from 'react';
import { ISpell } from '../model/types';

interface ISpellCard {
  spell: ISpell;
}

export const SpellCard: FC<ISpellCard> = ({ spell }) => (
  <li>
    <h3>{spell.spell}</h3>
    <p>{spell.use}</p>
  </li>
);
