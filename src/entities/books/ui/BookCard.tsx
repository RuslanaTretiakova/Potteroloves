import { FC } from 'react';
import { IBook } from '../model/types';

interface IBookCard {
  book: IBook;
}

export const BookCard: FC<IBookCard> = ({ book }) => (
  <li>
    <h3>{book.title}</h3>
    <p>{book.description}</p>
    <img src={book.cover} alt={`Cover of ${book.title}`} />
    <p>{book.releaseDate}</p>
    <p>{book.pages}</p>
  </li>
);
