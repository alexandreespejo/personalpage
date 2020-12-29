import styled from 'styled-components';

export const Text = styled.p`
  align-self: center;
  text-align: justify;
  margin: ${(props) => props.fontMargin};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`;
