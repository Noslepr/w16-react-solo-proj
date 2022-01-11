import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import { restoreUser } from "./store/session";
import LoginFormPage from './conponents/LoginFormModal';
import SignupFormPage from "./conponents/SignupFormPage";
import Navigation from "./conponents/Navigation";
import Explore from "./conponents/Explore";
import Splash from "./conponents/Splash";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(restoreUser()).then(() => {setIsLoaded(true)})
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} sessionUser={sessionUser}/>
      {!sessionUser && (
        <Splash />
      )}
        <Route exact path='/'>
          <Explore sessionUser={sessionUser}/>
        </Route>
    </>

  );
}

export default App;
