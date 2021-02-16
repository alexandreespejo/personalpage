import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    border-bottom: 1px solid var(--text-primary);
  }
`;

export const Tree = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 282px;
  height: 470px;
  grid-template-areas:
    'branch1 branch2 branch3'
    'branch4 branch5 branch6'
    'branch7 branch8 branch9'
    'branch10 branch11 branch12'
    'branch13 branch14 branch15';
  div:nth-child(1) {
    grid-area: branch1;
  }
  div:nth-child(2) {
    grid-area: branch2;
  }
  div:nth-child(3) {
    grid-area: branch3;
  }
  div:nth-child(4) {
    grid-area: branch4;
  }
  div:nth-child(5) {
    grid-area: branch5;
  }
  div:nth-child(6) {
    grid-area: branch6;
  }
  div:nth-child(7) {
    grid-area: branch7;
  }
  div:nth-child(8) {
    grid-area: branch8;
  }
  div:nth-child(9) {
    grid-area: branch9;
  }
  div:nth-child(10) {
    grid-area: branch10;
  }
  div:nth-child(11) {
    grid-area: branch11;
  }
  div:nth-child(12) {
    grid-area: branch12;
  }
  div:nth-child(13) {
    grid-area: branch13;
  }
  div:nth-child(14) {
    grid-area: branch14;
  }
  div:nth-child(15) {
    grid-area: branch15;
  }
`;
