import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Auth from './services/Auth'
import Home from './components/home'
import Login from './components/login'
import createStory from './components/createStory'
import getStories from './components/getStories'
import Main from './components/main'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest}
    render={
      props=>Auth.getAuth() ? (<Component {...props} />) : (<Redirect to={{pathname:'/'}} />)}
  />
)

function App() {
  return (
    <Router>
      <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/app/:userId/createStory" component={createStory}/>
        <PrivateRoute path="/app/:userId/getStories" component={getStories}/>
        <PrivateRoute path="/admin/getStories" component={getStories}/>
        <Route path="*" component={()=>(<h1>404 Page Not Found</h1>)} />
      </Switch>
      </Main>
    </Router>
  );
}

export default App;
