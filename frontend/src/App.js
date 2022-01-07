import { Route, Switch } from 'react-router-dom'
import LoginFormPage from './conponents/LoginFormPage';

function App() {
  return (
    <body>
      <h1>Hello from App</h1>
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
      </Switch>
    </body>

  );
}

export default App;
