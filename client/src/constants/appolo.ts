import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const getBooks = gql`
  query GetBooks {
    books {
      id
      title
      pageAmount
      author {
        name
      }
    }
  }
`;

export const getBook = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      id
      title
      pageAmount
    }
  }
`;

export const updateBook = gql`
  mutation UpdateBook($details: BookUpdateDetails) {
    updateBook(details: $details) {
      id
      title
      pageAmount
    }
  }
`;

export const addNewBookWithExistingAuthor = gql`
  mutation AddBook($details: BookDetailsWithExistingAuthor!) {
    addBookWithExistingAuthor(details: $details) {
      id
    }
  }
`;

export const addNewBookWithNewAuthor = gql`
  mutation AddBook($details: BookDetailsWithNewAuthor!) {
    addBookWithNewAuthor(details: $details) {
      book {
        id
      }
    }
  }
`;

export const deleteBook = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

export const getAuthors = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;
