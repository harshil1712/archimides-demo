import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import createStory from './components/createStory'
import getStories from './components/getStories'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/app/:userId/createStory" component={createStory}/>
        <Route path="/app/:userId/getStories" component={getStories}/>
        <Route path="/admin/getStories" component={getStories}/>
        <Route path="*" component={()=>(<h1>404 Page Not Found</h1>)} />
      </Switch>
    </Router>
  );
}

export default App;
