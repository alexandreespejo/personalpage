import styled from 'styled-components';
export const Title = styled.h1`
  color: ${(props) => props.theme.colorButton};
`;
export const Content = styled.main`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'none')};
  background: ${(props) =>
    props.background ? props.background : 'rgba(51, 49, 56, 0.35)'};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  width: ${(props) => (props.width ? props.width : '1000px')};
  height: ${(props) => (props.height ? props.height : '500px')};
`;
export const Division = styled.div`
  a {
    margin-left: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.colorButton};
    :hover {
      color: ${(props) => props.theme.colorHover};
    }
    font-size: 20px;
    font-weight: bold;
  }
  label {
    margin-left: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.colorButton};
    font-size: 20px;
    font-weight: bold;
  }
  display: ${(props) => (props.display ? props.display : 'flex')};
  align-items: center;
  margin-top: ${(props) => (props.margin ? props.margin : '20px')};
  width: ${(props) => (props.width ? props.width : '300px')};
`;
export const Image = styled.img`
  justify-self: initial;
  width: ${(props) => (props.width ? props.width : 'auto')};
`;
