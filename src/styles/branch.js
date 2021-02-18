import styled from 'styled-components';
export const Group = styled.div`
  display: ${(props) => (props.invisible ? 'none' : 'grid')};
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 20% 60% 20%;
  grid-template-areas:
    'none1 b1 none2'
    'b4 mid b2'
    'none3 b3 none4';
  width: 94px;
  height: 94px;
  div:nth-child(2) {
    grid-area: b1;
    display: ${(props) => (props.top ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    span {
      background: rgba(119, 127, 129, 0.5);
      width: 3px;
      height: 100%;
    }
  }

  div:nth-child(3) {
    grid-area: b2;
    display: ${(props) => (props.right ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    span {
      background: rgba(119, 127, 129, 0.5);
      width: 100%;
      height: 3px;
    }
  }

  div:nth-child(4) {
    grid-area: b3;
    display: ${(props) => (props.bottom ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    span {
      background: rgba(119, 127, 129, 0.5);
      width: 3px;
      height: 100%;
    }
  }

  div:nth-child(5) {
    grid-area: b4;
    display: ${(props) => (props.left ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    span {
      background: rgba(119, 127, 129, 0.5);
      width: 100%;
      height: 3px;
    }
  }
`;
export const Branch = styled.span`
  grid-area: mid;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    span {
      transition: all 0.4s ease-out;
      width: ${(props) => props.unlocked && '100px'};
      height: ${(props) => props.unlocked && '57px'};
      background: ${(props) => props.unlocked && 'transparent'};
      border: ${(props) => props.unlocked && 'none'};
      box-shadow: ${(props) => props.unlocked && 'none'};
      span {
        font-size: ${(props) => props.unlocked && '20px'};
        background: ${(props) => props.unlocked && '#153a35'};
        border: ${(props) =>
          props.unlocked && '2px solid rgba(250, 250, 250, 0.8)'};
        transform: ${(props) => props.unlocked && 'rotate(360deg)'};
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 25px;
    color: ${(props) =>
      props.unlocked ? 'rgba(250, 250, 250, 0.8)' : 'rgba(119, 127, 129, 0.8)'};
    width: 45px;
    height: 45px;
    background: ${(props) =>
      props.unlocked ? 'rgba(0, 191, 166, 0.1)' : 'rgba(119, 127, 129, 0.2)'};
    border: 2px solid
      ${(props) =>
        props.unlocked
          ? 'rgba(250, 250, 250, 0.8)'
          : 'rgba(119, 127, 129, 0.8)'};
    border-radius: 10px;
    span {
      transform: rotate(134.72deg);
      svg {
        transform: rotate(-134.72deg);
      }
      box-shadow: ${(props) =>
        props.unlocked ? '0px 0px 60px -12px #00BFA6' : 'none'};
    }
  }
`;
