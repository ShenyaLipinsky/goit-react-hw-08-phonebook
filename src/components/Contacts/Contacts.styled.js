import styled from 'styled-components';
export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => `${p.theme.space[4]}px`};
  padding: ${p => `${p.theme.space[3]}px`};
  background-color: ${p => p.theme.colors.primary};
  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  border-radius: ${p => p.theme.radii.large};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  box-shadow: ${p => p.theme.shadows.darkBox};
  & p {
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const ContactBtn = styled.button`
  padding: ${p => `${p.theme.space[2]}px`};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  :hover {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
    border-color: transparent;
  }
`;
