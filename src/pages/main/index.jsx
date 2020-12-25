import { Mother, Content } from './style';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
function Main({ children }) {
  var dark = {
    primary: 'rgb(26, 26, 29)',
    secondary: 'rgba(51, 49, 56, 0.87)',
    title: 'rgba(195, 46, 51, 0.87)',
    ligth: 'rgba(167, 161, 171, 0.87)',
  };
  window.addEventListener('click', () => {});
  return (
    <ThemeProvider theme={dark}>
      <Mother>
        <Header>{['Sobre', 'Projetos', 'Contato']}</Header>
        <Content>{children}</Content>
      </Mother>
    </ThemeProvider>
  );
}
export default Main;
