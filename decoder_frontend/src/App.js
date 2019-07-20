import React, { Component } from 'react';
import { BrowserRouter ,Switch,Route } from 'react-router-dom';
import ThreadList from './Component/Thread/ThreadList';
import CreateThread from './Component/Thread/CreateThread';
import SignIn from './Component/Auth/SignIn';
import SignOut from './Component/Auth/SignUp';
class App extends Component {
  render() {
    return (
    	<BrowserRouter>
      <div className="cc">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/thread' component={ThreadList} />
        <Route path='/create' component={CreateThread} />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={SignOut} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
