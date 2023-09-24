import { ContactItem, DeleteBtn } from './contactList.styled'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectError, selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const userFilteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {userFilteredContacts &&
        !error &&
        userFilteredContacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id}>
              {name}: {phone}
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
    </ul>
  );
};

export default ContactsList;
