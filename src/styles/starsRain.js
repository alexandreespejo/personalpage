import styled, { keyframes } from 'styled-components';
const starsAnimation = keyframes`
  0% {
    transform:translate(0, 0);
    
  }
  25%: {
    transform:translate(-10vw, 30vh);
    
  }
  50% {
    transform:translate(12vw, 60vh);
  }
  75% {
    transform:translate(-10vw, 80vh);
  }
  100% {
    transform:translate(9vw, 110vh);
  }
`;
export const Stars = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;
export const Star = styled.span`
  left: 50%;
  width: 22px;
  height: 22px;
  position: absolute;
  transform-origin: left top;
  border-radius: 50%;
  background: var(--green-secondary);
  box-shadow: 0px 0px 26px var(--green-primary);
  animation: ${starsAnimation} 6s ease-in-out infinite;
  span {
    left: -25%;
    top: -25%;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  :nth-child(1) {
    left: 6%;
    animation-delay: 0;
  }
  :nth-child(2) {
    left: 12%;
    animation-delay: -5s;
  }

  :nth-child(3) {
    left: 18%;
    animation-delay: -3s;
  }

  :nth-child(4) {
    left: 24%;
    animation-delay: -2.5s;
  }

  :nth-child(5) {
    left: 30%;
    animation-delay: -4s;
  }

  :nth-child(6) {
    left: 76%;
    animation-delay: -6s;
  }

  :nth-child(7) {
    left: 82%;
    animation-delay: -1.5s;
  }

  :nth-child(8) {
    left: 88%;
    animation-delay: -2s;
  }

  :nth-child(9) {
    left: 94%;
    animation-delay: -3.5s;
  }

  :nth-child(10) {
    left: 100%;
    animation-delay: -2.5s;
  }
`;
