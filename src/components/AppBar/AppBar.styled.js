import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};
  min-width: 60px;

  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :last-child {
    margin-left: ${p => p.theme.space[3]}px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hovered};
  }
`;
export const LogOutBtn = styled.button`
  padding: ${p => `${p.theme.space[2]}px`};
  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  border-color: transparent;

  :hover {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.red};
  }
`;
export const GreetingMessage = styled.p`
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${p => p.theme.colors.accent};
`;
