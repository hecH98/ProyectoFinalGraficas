import React from 'react';
import './App.css';
import Album from './components/Album';
import Canvas from './components/Canvas';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" component={Album} exact></Route>
        <Route path="/canvas" component={Canvas} exact></Route>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
