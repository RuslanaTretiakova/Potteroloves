import { FC } from 'react';
import { IHouse } from '../model/types';

interface IHouseCard {
  house: IHouse;
}

export const HouseCard: FC<IHouseCard> = ({ house }) => (
  <li>
    <h3>
      {house.house} {house.emoji}
    </h3>
    <p>Founder: {house.founder}</p>
    <p>Colors: {house.colors.join(', ')}</p>
    <p>Animal: {house.animal}</p>
  </li>
);
