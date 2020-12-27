import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.header)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.showMenu ? 'space-between' : 'start')};
  /* width: ${(props) => (props.showMenu ? '100%' : '60px')}; */
  height: 60px;
  background-color: ${(props) => props.theme.secondary};
  /* background-color: ${(props) =>
    props.showMenu ? props.theme.secondary : 'none'}; */
  transition: all 0.25s linear;
`;

export const Division = styled(animated.div)`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
`;
