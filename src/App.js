import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/Productlist';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Login from './components/Login';






class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Login />
      </div>
    );
  }
}

export default App;
