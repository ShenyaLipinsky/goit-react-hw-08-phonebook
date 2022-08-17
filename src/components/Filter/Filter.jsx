import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/contactsSlice';
import { FilterLabel, FilterInput, FilterForm } from './Filter.styled';

export const Filter = ({ title, value }) => {
  const dispatch = useDispatch();

  return (
    <>
      <FilterForm autoComplete="off">
        <FilterLabel htmlFor="filter">
          {title}
          <FilterInput
            type="text"
            name="filter"
            value={value}
            onChange={e => {
              dispatch(filter(e.target.value));
            }}
          />
        </FilterLabel>
      </FilterForm>
    </>
  );
};

Filter.propTypes = {
  title: propTypes.string,
  value: propTypes.string.isRequired,
};
