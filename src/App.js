import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './screens/homeScreen';
import User from './screens/userScreen';
import Item from './screens/itemScreen';
import Header from './components/shared/header';
import UnknownPage from './components/shared/404';

const BodyDiv = styled.div`
  width: 85%;
  background-color: rgb(246, 246, 239);
  margin: 0 auto;
  overflow-wrap: break-word;
`;

function App() {
  return (
    <Router>
      <Switch>
        <BodyDiv>
          <Header />
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/">
            <Redirect to="/front" />
          </Route>
          <Route exact path="/front">
            <Home />
          </Route>
          <Route exact path="/newest">
            <Home />
          </Route>
          <Route exact path="/ask">
            <Home />
          </Route>
          <Route exact path="/show">
            <Home />
          </Route>
          <Route exact path="/item">
            <Item />
          </Route>
          {/*<Route component={UnknownPage} />*/}
        </BodyDiv>
      </Switch>
    </Router>
  );
}

export default App;
