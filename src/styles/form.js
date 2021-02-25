import styled, { keyframes } from 'styled-components';
const showMessage = keyframes`
0%{
  opacity:0;
  transform: translateX(110%);
}
20%{
  opacity:1;
  transform: translateX(0%);
}
80%{
  opacity:1;
  transform: translateX(0%);
}
100%{
  opacity:0;
  transform: translateX(110%);
}
`;

export const Container = styled.main`
  overflow: hidden;
  z-index: 1;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  footer {
    display: flex;
    align-items: initial;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    div {
      transform: translateX(110%);
      animation: ${showMessage} 4s cubic-bezier(0.6, -0.28, 0.74, 0.05) infinite;
      animation-play-state: ${(props) =>
        props.isAnimationPaused ? 'paused' : 'running'};

      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      background: rgba(44, 150, 136, 0.6);
      border-radius: 5px;
      height: 80%;
      width: 13rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        svg {
          transform: translate(-2px, -20%);
          font-size: 24px;
        }
      }
    }
  }
  svg {
    z-index: 0;
    font-size: 50px;
    margin-bottom: -10px;
    cursor: pointer;
    color: var(--text-secondary);
  }
  form {
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 300px;
    background: var(--page-primary-light);
    border: 1px solid var(--text-secondary);
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      width: 80%;
      textarea {
        padding-left: 5px;
        padding-top: 5px;
        font-size: 14px;
        background: rgba(119, 127, 129, 0.4);
        color: var(--text-secondary);
        box-shadow: none;
        border-radius: 5px;
        border: 1px solid var(--page-primary);
        color: var(--text-secondary);
        height: 130px;
        width: 100%;
      }
      input {
        padding-left: 5px;
        font-size: 14px;
        background: rgba(119, 127, 129, 0.4);
        color: var(--text-secondary);
        box-shadow: none;
        border: 1px solid var(--page-primary);
        border-radius: 5px;
        height: 20px;
        width: 100%;
      }
    }
    button {
      :disabled {
        opacity: 0.6;
        cursor: auto;
      }
      background: var(--green-secondary);
      border: none;
      border-radius: 5px;
      color: var(--text-primary);
      width: 60%;
      height: 30px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
    }
  }
`;
