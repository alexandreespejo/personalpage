import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--page-secondary);
  height: 9%;
  width: 100%;
  transform: ${(props) =>
    props.isShowMenu ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)'};
  transition: transform 0.6s linear;
`;

export const Division = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
`;
