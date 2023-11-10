import { useQuery } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';

import AddBookForm from '@/components/AddBookForm';
import BookList from '@/components/BookList';
import Header from '@/components/Header';
import { getBooks } from '@/constants';

import { BooksResponse } from './interfaces/apollo';
import { AppWrapper, FormWrapper } from './styled';

loadDevMessages();
loadErrorMessages();

function App() {
  const { loading, data, refetch } = useQuery<BooksResponse>(getBooks);

  if (loading) {
    return <p>Loading...</p>;
  }

  const refetchBooks = () => refetch();

  return (
    <AppWrapper>
      <Header />
      <FormWrapper>
        <AddBookForm onAfterBookAdd={refetchBooks} />
      </FormWrapper>
      {data ? (
        <BookList onAfterDelete={refetchBooks} books={data?.books} />
      ) : (
        <p>No books</p>
      )}
    </AppWrapper>
  );
}

export default App;
