import { FC } from 'react';
import { IHouse } from '../model/types';
import { HouseCard } from './HouseCard';
import { useGetResourceQuery } from '@/shared/api/potterApi';

export const HouseList: FC = () => {
  const { data: houses = [] } = useGetResourceQuery({
    resource: 'houses',
  });

  return (
    <div>
      <h2>Hogwarts Houses</h2>
      <ul>
        {houses?.map((house: IHouse) => (
          <HouseCard key={house.house} house={house} />
        ))}
      </ul>
    </div>
  );
};
