import { FC } from 'react';
import { useGetResourceQuery } from '@/shared/api/potterApi';

import { ICharacter } from '../model/types';
import { CharacterCard } from './CharacterCard';

export const CharacterList: FC = () => {
  const { data: characters = [] } = useGetResourceQuery({
    resource: 'characters',
  });

  return (
    <div>
      <ul>
        {characters?.map((character: ICharacter) => (
          <CharacterCard key={character.fullName} character={character} />
        ))}
      </ul>
    </div>
  );
};
