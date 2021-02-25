import styled, { keyframes } from 'styled-components';

const afterFirstSpan = keyframes`
0%{
  width: 45px;
  height: 45px;
}
84%{
  width: 45px;
  height: 45px;
}
100%{
  width: 100px;
  height: 57px;
}
`;
const afterSecondSpan = keyframes`
0%{
  transform:rotate(0deg);
}
70%{
  transform:rotate(360deg);
  
  }
`;
const afterFirstSvg = keyframes`
  0%{opacity:1;}
  100%{opacity:0;}
`;
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
      animation: ${(props) => props.unlocked && afterFirstSpan} 0.6s ease-in;
      animation-play-state: ${(props) =>
        props.unlocked ? 'running' : 'paused'};
      width: ${(props) => props.unlocked && '100px'};
      height: ${(props) => props.unlocked && '57px'};
      box-shadow: ${(props) => props.unlocked && 'none'};
      span {
        svg {
          animation: ${(props) => props.unlocked && afterFirstSvg} 0.6s linear;
          animation-play-state: ${(props) =>
            props.unlocked ? 'running' : 'paused'};
        }
        transition: border 0.7s ease-in;
        animation: ${(props) => props.unlocked && afterSecondSpan} 0.6s linear;
        animation-play-state: ${(props) =>
          props.unlocked ? 'running' : 'paused'};

        font-size: ${(props) => props.unlocked && '20px'};
        background: ${(props) => props.unlocked && '#153a35'};
        border-color: ${(props) => props.unlocked && 'transparent'};
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
      width: 45px;
      height: 45px;
      transform: rotate(134.72deg);
      svg {
        transform: rotate(-134.72deg);
      }
      box-shadow: ${(props) =>
        props.unlocked ? '0px 0px 60px -12px #00BFA6' : 'none'};
    }
  }
`;
