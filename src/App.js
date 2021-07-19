/* Imports de Librerias */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* Imports de componentes */
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
