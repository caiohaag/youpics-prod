import "./App.scss";
import Feed from "./pages/feed/Feed";
import Profile from "./pages/profile/Profile";
import { Switch,  Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {  
  const {user} = useContext(AuthContext);

  return (    
      <div className="App">       
        <Switch> 
          <Route exact path="/">
            {user ? <Feed user={user} /> : <Login/>}
          </Route>
          <Route path="/profile/:username">
            {user ? <Profile user={user}/> : <Login/>}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> :<Login/>}
          </Route>
        </Switch>
      </div>    
  );
}

export default App;
