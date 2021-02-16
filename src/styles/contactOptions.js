import styled, { keyframes } from 'styled-components';
const moviment = keyframes`
0%{
  transform: scale(1)
}
50%{
  transform: scale(1.2)
}
100%{
  transform: scale(1)
}
`;
export const Content = styled.div`
  display: grid;
  z-index: 2;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'btn1 btn2'
    'btn3 btn4';
  background: transparent;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  transition: all 0.6s linear;
  @media (max-width: 600px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }

  button {
    text-align: center;
    @media (max-width: 600px) {
      font-size: 40px;
    }
    font-size: 50px;
    background: rgba(119, 127, 129, 0.2);
    color: rgba(119, 120, 129, 0.2);
    width: 98%;
    height: 98%;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
      background: rgba(0, 191, 166, 0.2);
      color: var(--button-primary);
      box-sizing: border-box;
      box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.1);
      border: 3px solid var(--button-primary);
      svg {
        animation: ${moviment} 2s linear infinite;
      }
    }
    :active {
      opacity: 0.8;
    }
  }
  a:nth-child(1) button {
    grid-area: btn1;
    border-radius: 100% 0% 20% 0%;
  }
  a:nth-child(2) button {
    grid-area: btn2;
    border-radius: 0px 100% 0px 20%;
  }
  a:nth-child(3) button {
    grid-area: btn3;
    border-radius: 0px 20% 0px 100%;
  }
  button:nth-child(4) {
    grid-area: btn4;
    border-radius: 20% 0px 100% 0px;
  }
`;
