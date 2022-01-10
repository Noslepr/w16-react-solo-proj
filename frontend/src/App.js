import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import { restoreUser } from "./store/session";
import LoginFormPage from './conponents/LoginFormModal';
import SignupFormPage from "./conponents/SignupFormPage";
import Navigation from "./conponents/Navigation";
import Explore from "./conponents/Explore";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(restoreUser()).then(() => {setIsLoaded(true)})
  }, [dispatch])

  return (
    <>
      <Navigation idLoaded={isLoaded}/>
        <Route exact path='/'>
          <Explore />
        </Route>
    </>

  );
}

export default App;
