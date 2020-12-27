import styled from 'styled-components';

export const Container = styled.button`
  display: ${(props) => props.display || 'flex'};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '33%'};
  height: ${(props) => props.height || '99%'};
  margin-top: 1px;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.2s linear;
  transform: ${(props) => props.invert && 'rotateZ(180deg)'};
  :hover {
    /* border-bottom: 2px solid ${(props) => props.theme.title}; */
    color: ${(props) => props.theme.title};
  }
  text-decoration: none;
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: bold;
  color: ${(props) => props.theme.ligth};
`;
