import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {MainView} from  './components/MainView';
import {NavBar} from './components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">Assignment in React JS</h3>
        <NavBar/>
        <Switch>
          <Route  path='/navbar' component={NavBar} />
          <Route exact path='/' component={MainView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
