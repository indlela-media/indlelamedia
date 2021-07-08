//React Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//SCSS
import './scss/responsive.scss';

//CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Components
import Homepage from '../src/components/Homepage';
import Header from './components/navigation/Header';

//
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
