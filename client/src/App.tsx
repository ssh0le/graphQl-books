import { useQuery } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';

import AddBookForm from '@/components/AddBookForm';
import BookList from '@/components/BookList';
import Header from '@/components/Header';
import { getCountries } from '@/constants';

import { BooksResponse } from './interfaces/apollo';
import { AppWrapper } from './styled';

loadDevMessages();
loadErrorMessages();

function App() {
  const { loading, data, refetch } = useQuery<BooksResponse>(getCountries);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleFormAdd = () => refetch();

  return (
    <AppWrapper>
      <Header />
      <AddBookForm onAdd={handleFormAdd} />
      {data ? <BookList books={data?.books} /> : <p>No books</p>}
    </AppWrapper>
  );
}

export default App;
