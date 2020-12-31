import styled from 'styled-components';

export const Container = styled.button`
  display: ${(props) => props.display || 'flex'};
  position: ${(props) => props.position || 'none'};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '140px'};
  height: ${(props) => props.height || '40px'};
  margin-top: 1px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  cursor: pointer;
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : 'none')};
  outline: none;
  transition: all 0.2s linear;
  transform: ${(props) => props.invert && 'rotateZ(180deg)'};
  :hover {
    color: ${(props) =>
      props.colorHover
        ? 'var(--button-secondary)'
        : props.color
        ? props.color
        : 'var(--button-primary)'};
  }
  :active {
    opacity: ${(props) => (props.active ? 0.5 : 1)};
    transition: opacity 0.1s linear;
  }
  text-decoration: none;
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : 'var(--button-primary)')};
`;
