import styled from 'styled-components';

export const Container = styled.button`
  @media (max-width: 500px) {
    display: ${(props) => props.isArrow && 'none'};
  }
  font-weight: 300;
  display: ${(props) => props.display || 'flex'};
  position: ${(props) => props.position || 'none'};
  z-index: ${(props) => props.zIndex};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '140px'};
  height: ${(props) => props.height || '95%'};
  margin-top: 1px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  cursor: pointer;
  border: none;
  border-bottom: ${(props) =>
    props.isSelected && '2px solid var(--button-primary)'};
  border-radius: ${(props) => (props.radius ? props.radius : 'none')};
  outline: none;
  transition: transform 0.2s linear;
  transform: ${(props) => props.invert && 'rotateZ(180deg)'};
  :hover {
    border-bottom: ${(props) =>
      props.isSelected
        ? '2px solid var(--button-primary)'
        : props.isOption && '2px solid var(--text-secondary)'};
  }
  :active {
    opacity: ${(props) => (props.active ? 0.5 : 1)};
    transition: opacity 0.1s linear;
  }
  text-decoration: none;
  font-size: ${(props) => props.fontSize || '20px'};
  color: ${(props) =>
    props.color
      ? props.color
      : props.isSelected
      ? 'var(--text-primary)'
      : 'var(--text-secondary)'};
`;
