import { Container, Title, ContactListTitle } from './App/App.styled';
import Form from './form/Form';
import ContactsList from './contact/contactList';
import Filter from './filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { SetError } from './error/Error';
import Spiner from './spinner/Spinner';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <ContactListTitle> Contacts</ContactListTitle>
      <Filter />
      <ContactsList />
      <SetError />
      <Spiner />
    </Container>
  );
};

export default App;
