import styled from 'styled-components';

export const Container = styled.header`
  background: rgba(119, 127, 129, 0.4);
  position: absolute;
  z-index: 98;
  width: 100%;
  transform: ${(props) =>
    props.isShowMenu ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)'};
  @media (max-width: 500px) {
    transform: translate3d(0, 0, 0);
  }
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
