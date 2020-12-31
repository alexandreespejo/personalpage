import { Mother, Content } from './style';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
function Main({ children }) {
  window.addEventListener('click', () => {});
  return (
    <Mother>
      <Header>{['Sobre', 'Projetos', 'Contato']}</Header>
      <Content>{children}</Content>
    </Mother>
  );
}
export default Main;
