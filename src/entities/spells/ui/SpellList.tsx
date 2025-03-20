import { FC } from 'react';

import { useGetResourceQuery } from '@/shared/api/potterApi';
import { ISpell } from '../model/types';
import { SpellCard } from './SpellCard';

export const SpellList: FC = () => {
  const { data: spells } = useGetResourceQuery({
    resource: 'spells',
  });

  return (
    <div>
      <ul>
        {spells?.map((spell: ISpell) => (
          <SpellCard key={spell.spell} spell={spell} />
        ))}
      </ul>
    </div>
  );
};
