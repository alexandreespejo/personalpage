import styled from 'styled-components';

export const Knowledges = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 280px;
  height: 300px;
  flex-wrap: wrap;
  border-radius: 20px;
`;
export const KnowCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 33%;
  border-radius: 10px;
  -webkit-box-shadow: 12px 12px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 12px 12px 16px -3px rgba(0, 0, 0, 0.5);
  background: var(--page-primary-light);
`;
