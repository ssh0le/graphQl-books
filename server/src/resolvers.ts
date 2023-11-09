import db from './_db.js';
import { findElementById, generateId } from './helpers.js';
import { Author, Book, QueryResolvers } from './types.js';

export const resolvers: QueryResolvers = {
  Query: {
    books: () => db.initialBooks,
    authors: () => db.initialAuthors,
    book: (parent, { id }) => findElementById(db.initialBooks, id),
    author: (parent, { id }) => findElementById(db.initialAuthors, id),
  },
  Author: {
    books: (author) => {
      return db.initialBooks.filter((book) => book.authorId === author.id);
    },
  },
  Book: {
    author: (book) => {
      return findElementById(db.initialAuthors, book.authorId);
    },
  },
  Mutation: {
    deleteBook: (parent, { id }) => {
      const book = findElementById(db.initialBooks, id);
      if (book) {
        db.initialBooks = db.initialBooks.filter((book) => book.id !== id);
      }
      return book;
    },
    addBookWithExistingAuthor: (parent, args) => {
      const { title, pageAmount, authorId } = args.details;
      const newBook: Book = {
        id: generateId(),
        title,
        pageAmount,
        authorId,
      };
      db.initialBooks.push(newBook);
      return newBook;
    },
    addBookWithNewAuthor(parent, args) {
      const { title, pageAmount, authorName } = args.details;
      const newAuthor: Author = {
        id: generateId(),
        name: authorName,
      };
      const newBook: Book = {
        id: generateId(),
        authorId: newAuthor.id,
        title,
        pageAmount,
      };
      db.initialAuthors.push(newAuthor);
      db.initialBooks.push(newBook);
      return {
        book: newBook,
        author: newAuthor,
      };
    },
    updateBook: (parent, args) => {
      const { id } = args.details;
      db.initialBooks = db.initialBooks.map((book) => {
        if (book.id === id) {
          return { ...book, ...args.details };
        }
        return book;
      });
      return findElementById(db.initialBooks, id);
    },
  },
};
