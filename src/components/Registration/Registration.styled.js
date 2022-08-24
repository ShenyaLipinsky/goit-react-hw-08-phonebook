import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const InputStyled = styled(Form.Control)`
  width: 250px;
  &.error {
    border: 2px solid #ff6565;
  }
`;
export const ErrorMessageBox = styled.div`
  &.error-message {
    color: #ff6565;
    padding: 0.5em 0.2em;
    height: 1em;
    position: absolute;
    font-size: 0.8em;
    width: 250px;
  }
`;
