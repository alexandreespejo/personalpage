import styled from 'styled-components';

export const Container = styled.button`
  display: ${(props) => props.display || 'flex'};
  position: ${(props) => props.position || 'none'};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '140px'};
  height: ${(props) => props.height || '40px'};
  margin-top: 1px;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.5s linear;
  transform: ${(props) => props.invert && 'rotateZ(180deg)'};
  :hover {
    /* border-bottom: 2px solid ${(props) => props.theme.title}; */
    color: ${(props) => props.theme.colorHover};
  }
  text-decoration: none;
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: bold;
  color: ${(props) => props.theme.colorButton};
`;
