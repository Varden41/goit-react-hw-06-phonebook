import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <>
      <LabelStyled htmlFor="search">
        Find contacts by name
        <InputStyled
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          name="search"
          value={filter}
          onChange={onFilter}
        />
      </LabelStyled>
    </>
  );
};

// Filter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };

export default Filter;
