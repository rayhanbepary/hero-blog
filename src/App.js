import React from 'react';
import { Switch,Route } from "react-router-dom";
import './App.css';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/post-details/:postId" component={PostDetails}></Route>
        <Route exact path="*" component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
