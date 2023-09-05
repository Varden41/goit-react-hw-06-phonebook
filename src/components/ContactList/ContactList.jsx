import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getItem } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);
  const onDelete = e => {
    dispatch(deleteContact(e.target.name));
  };
  const contactsFilter = () => {
    if (filter === '') {
      return false;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const filteredRender = contactsFilter();
  const finalrender = filteredRender ? filteredRender : contacts;
  return (
    <ul>
      {finalrender.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <ButtonStyled name={id} type="botton" onClick={onDelete}>
              Delete
            </ButtonStyled>
          </ListItem>
        );
      })}
    </ul>
  );
}

// ContactList.propTypes = {
//   filteredContacts: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
