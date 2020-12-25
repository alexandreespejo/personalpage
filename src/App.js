import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
export default App;
