import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getItem } from 'redux/contactsSlice/contactsSlice';
import { setFilter } from 'redux/filterSlice/filterSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(setFilter);
  const delContacts = e => {
    dispatch(deleteContact(event.target.name));
  };
  return (
    <ul>
      {filteredContacts().map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <ButtonStyled
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </ButtonStyled>
          </ListItem>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
