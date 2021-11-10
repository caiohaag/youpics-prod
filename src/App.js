import "./App.scss";
import Feed from "./pages/feed/Feed";
import Profile from "./pages/profile/Profile";
import { Switch,  Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import SearchUsers from "./pages/searchUsers/SearchUsers";
import Pag404 from "./pages/pag404/Pag404";

function App() {  
  const {user} = useContext(AuthContext);

  return (    
      <div className="App">       
        <Switch> 
          <Route exact path="/">
            {user ? <Feed user={user} /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/profile/:username">
            {user ? <Profile user={user}/> : <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login/>}
          </Route>
          <Route path="/search/:search">
            {user ? <SearchUsers user={user}/> : <Redirect to="/login"/>}
          </Route>
          <Route path='*' exact={true}>
            <Pag404/>
          </Route>
        </Switch>
      </div>    
  );
}

export default App;
