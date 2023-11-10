import { Author, Book } from './types.js';

const initialBooks: Book[] = [
  {
    id: '1',
    title: 'Three comrades',
    authorId: '1',
    pageAmount: 300,
  },
  {
    id: '2',
    title: 'Arch of Triumph',
    authorId: '1',
    pageAmount: 200,
  },
  {
    id: '3',
    title: 'Heaven Has No Favorites',
    authorId: '1',
    pageAmount: 150,
  },
  {
    id: '4',
    title: 'Clean code',
    authorId: '2',
    pageAmount: 400,
  },
  {
    id: '5',
    title: 'Colorless Tsukuru Tazaki and His Years of Pilgrimage',
    authorId: '3',
    pageAmount: 250,
  },
];

const initialAuthors: Author[] = [
  {
    id: '1',
    name: 'Erich Maria Remarque',
  },
  {
    id: '2',
    name: 'Robert Cecil Martin',
  },
  {
    id: '3',
    name: 'Haruki Murakami',
  },
];

export default {
  initialBooks,
  initialAuthors,
};
