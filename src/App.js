import React from 'react';
import logo from './logo.svg';
import KegList from './components/KegList';
import NewKegForm from './components/NewKegForm';
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={KegList} />
    <Route path='/newkeg' component={NewKegForm} />
    </Switch>
    </div>
  );
}

export default App;
