import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import { restoreUser } from "./store/session";
import { getPhotos } from "./store/photos";
import LoginFormPage from './conponents/LoginFormModal';
import SignupFormPage from "./conponents/SignupFormPage";
import Navigation from "./conponents/Navigation";
import Explore from "./conponents/Explore";
import Splash from "./conponents/Splash";
import PostPhoto from "./conponents/PostPhoto";
import PhotoDetails from "./conponents/PhotoDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(restoreUser()).then(() => {setIsLoaded(true)})
  }, [dispatch])

  useEffect(() => {
    dispatch(getPhotos())
}, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} sessionUser={sessionUser}/>
      {!sessionUser && (
        <Splash />
      )}
      <Switch>
        <Route exact path='/'>
          <Explore sessionUser={sessionUser}/>
        </Route>
        <Route path='/post-photo'>
          <PostPhoto sessionUser={sessionUser} />
        </Route>
        <Route  path='/photo/:photoId'>
          <PhotoDetails />
        </Route>
      </Switch>
    </>

  );
}

export default App;
