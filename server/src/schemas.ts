export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        pageAmount: Int!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        books: [Book!]
    }

    type Query {
        books: [Book!]
        authors: [Author!]
        book(id: ID!): Book
        author(id: ID!): Author
    }

    type Mutation {
        deleteBook(id: ID!): Book
        addBookWithExistingAuthor(details: BookDetailsWithExistingAuthor!): Book!
        addBookWithNewAuthor(details: BookDetailsWithNewAuthor! ): BookAndAuthor!
        updateBook(details: BookUpdateDetails) : Book
    }

    type BookAndAuthor {
        book: Book
        author: Author
    }

    input BookDetailsWithExistingAuthor {
        authorId: ID!
        title: String!,
        pageAmount: Int!
    }

    input BookDetailsWithNewAuthor {
        authorName: String!
        title: String!,
        pageAmount: Int!
    }

    input BookUpdateDetails {
        id: ID!
        title: String,
        pageAmount: Int,
    }
`;
