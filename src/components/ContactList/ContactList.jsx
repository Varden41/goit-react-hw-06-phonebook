import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, ListItem } from './ContactList.styled';

function ContactList({ filteredContacts, onDelete }) {
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
