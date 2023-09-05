import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormStyled,
  InputStyled,
  ErrorMessageStyled,
  LabelStyled,
  ButtonStyled,
} from './ContactForm.styled';

let schema = yup.object({
  name: yup
    .string()
    .required('Please enter a name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Please enter a number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

function ContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = ({ name, number }) => {
    onSubmit(name, number);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onHandleSubmit)}>
      <LabelStyled htmlFor="name">
        Name
        <InputStyled {...register('name')} />
        <p>{errors.firstName?.message}</p>
        <ErrorMessageStyled>{errors.name?.message}</ErrorMessageStyled>
      </LabelStyled>
      <LabelStyled htmlFor="number">
        Number
        <InputStyled {...register('number')} />
        <ErrorMessageStyled>{errors.number?.message}</ErrorMessageStyled>
      </LabelStyled>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
  );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
