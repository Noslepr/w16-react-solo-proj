import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import { restoreUser } from "./store/session";
import LoginFormPage from './conponents/LoginFormModal';
import SignupFormPage from "./conponents/SignupFormPage";
import Navigation from "./conponents/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(restoreUser()).then(() => {setIsLoaded(true)})
  }, [dispatch])

  return (
    <>
      <Navigation idLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>

  );
}

export default App;
