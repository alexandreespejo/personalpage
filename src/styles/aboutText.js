import styled from 'styled-components';

export const Text = styled.label`
  align-self: center;
  text-align: justify;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.fontColor};
  max-width: 450px;
`;
