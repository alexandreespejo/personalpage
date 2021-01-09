import styled from 'styled-components';

export const Text = styled.label`
  align-self: center;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  opacity: ${(props) => props.opacity};
  color: ${(props) => props.fontColor};
  max-width: 80%;
  @media (max-width: 980px) {
    min-width: 80%;
  }
`;
