import propTypes from 'prop-types';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { filter } from 'redux/contactsSlice';
import { FilterLabel, FilterInput, FilterForm } from './Filter.styled';

const Filter = ({ title, value }) => {
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

Filter.propTypes = {
  title: propTypes.string,
  value: propTypes.string.isRequired,
};

export default Filter;
