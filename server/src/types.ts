export interface Book {
    id: string;
    title: string;
    authorId: string;
    pageAmount: number;
}

export interface Author {
    id: string;
    name: string;
}

export interface QueryResolvers {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
    Query: {
        books: () => Book[];
        authors: () => Author[];
        book: GetByIdFunction<Book>;
        author: GetByIdFunction<Author>;
    };
    Author: {
        books: (parent: Author) => Book[] | null;
    };
    Book: {
        author: (author: Book) => Author | null;
    };
    Mutation: {
        deleteBook: (parent: Book, args: QueryArguments) => Book | null;
        addBookWithExistingAuthor: (
            parent: undefined,
            args: { details: BookDetailsWithExistingAuthor }
        ) => Book;
        addBookWithNewAuthor: (
            parent: undefined,
            args: { details: BookDetailsWithNewAuthor }
        ) => { book: Book; author: Author };
        updateBook: (
            parent: undefined,
            args: { details: BookUpdateDetails }
        ) => Book | null;
    };
}

export interface GetByIdFunction<T> {
    (parent: T, args: QueryArguments): T | null;
}

export interface QueryArguments {
    id: string;
}

export interface BookDetailsWithExistingAuthor extends CommonBookDetails {
    authorId: string;
}

export interface BookDetailsWithNewAuthor extends CommonBookDetails {
    authorName: string;
}

export interface CommonBookDetails {
    title: string;
    pageAmount: number;
}

export type BookUpdateDetails = Partial<CommonBookDetails> & { id: string };
