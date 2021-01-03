import { TabProvider } from './contexts/tab';
import Main from './pages/main';
function App() {
  return (
    <TabProvider>
      <Main />
    </TabProvider>
  );
}
export default App;
