import { TabProvider } from './contexts/tab';
import Main from './pages/main';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <TabProvider>
      <Switch>
        <Main>
          <Route path="/personalpage/" exact component={About} />
          <Route path="/personalpage/projects" exact component={Projects} />
          <Route path="/personalpage/contact" exactcomponent={Contact} />
        </Main>
      </Switch>
    </TabProvider>
  );
}
export default App;
