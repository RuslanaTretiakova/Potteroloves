import { FC } from 'react';

import { useGetResourceQuery } from '@/shared/api/potterApi';
import { IBook } from '../model/types';
import { BookCard } from './BookCard';

export const BookList: FC = () => {
  const { data: books = [] } = useGetResourceQuery({
    resource: 'books',
  });

  return (
    <div>
      <ul>
        {books?.map((book: IBook) => (
          <BookCard key={book.number} book={book} />
        ))}
      </ul>
    </div>
  );
};
