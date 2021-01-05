import { TabProvider } from './contexts/tab';
import Main from './pages/main';
const App = () => {
  return (
    <TabProvider>
      <Main />
    </TabProvider>
  );
};
export default App;
