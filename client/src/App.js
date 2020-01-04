import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import MyHeros from './components/MyHeros';
import {Container} from "semantic-ui-react";
import {Switch, Route} from "react-router-dom";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => (
  <Fragment>
    <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/my_heros" component={MyHeros} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
  </Fragment>
)

export default App;
