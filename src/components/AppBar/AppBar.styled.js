import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: underline;

  &.active {
    color: ${p => p.theme.colors.secondaryText};
  }
`;
